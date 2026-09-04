import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

type GlobalInfoBulleProps = {
  section: "light" | "dark";
  title?: string;
  children: React.ReactNode;
  desktopDuration?: number;
  mobileDuration?: number;
  className?: string;
};

type Phase = "closed" | "opening" | "open" | "dissolving";

const OPEN_DURATION = 1100;
const DISSOLVE_DURATION = 1000;

export default function GlobalInfoBulle({
  section,
  title,
  children,
  desktopDuration = 7000,
  mobileDuration = 1800,
  className = "",
}: GlobalInfoBulleProps) {
  const [phase, setPhase] = useState<Phase>("closed");

  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const hasAutoOpenedRef = useRef(false);

  const openingTimerRef = useRef<number | null>(null);
  const closeTimerRef = useRef<number | null>(null);
  const dissolveTimerRef = useRef<number | null>(null);

  // Couleur opposée à celle de la section
  const isDark = section === "light";

  const visible = phase !== "closed";

  const clearTimers = useCallback(() => {
    if (openingTimerRef.current !== null) {
      window.clearTimeout(openingTimerRef.current);
      openingTimerRef.current = null;
    }

    if (closeTimerRef.current !== null) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }

    if (dissolveTimerRef.current !== null) {
      window.clearTimeout(dissolveTimerRef.current);
      dissolveTimerRef.current = null;
    }
  }, []);

  const startClose = useCallback(() => {
    clearTimers();

    setPhase("dissolving");

    dissolveTimerRef.current = window.setTimeout(() => {
      setPhase("closed");
      dissolveTimerRef.current = null;
    }, DISSOLVE_DURATION);
  }, [clearTimers]);

  const openBubble = useCallback(
    (duration?: number) => {
      clearTimers();

      setPhase("opening");

      openingTimerRef.current = window.setTimeout(() => {
        setPhase("open");
        openingTimerRef.current = null;

        if (duration) {
          closeTimerRef.current = window.setTimeout(() => {
            startClose();
          }, duration);
        }
      }, OPEN_DURATION);
    },
    [clearTimers, startClose],
  );

  const handleToggle = () => {
    if (phase === "open" || phase === "opening") {
      startClose();
      return;
    }

    if (phase === "dissolving") return;

    // Ouverture manuelle :
    // elle reste ouverte jusqu'au prochain clic.
    openBubble();
  };

  // Ajoute ou retire une classe sur la section
  // afin de réserver temporairement de l'espace sur mobile.
  useEffect(() => {
    const wrapper = wrapperRef.current;

    if (!wrapper) return;

    const parentSection = wrapper.closest("section");

    if (!parentSection) return;

    parentSection.classList.toggle(
      "has-info-bulle-open",
      phase !== "closed",
    );

    return () => {
      parentSection.classList.remove(
        "has-info-bulle-open",
      );
    };
  }, [phase]);

  // Ouverture automatique lorsque la section
  // entre dans la zone visible de l'écran.
  useEffect(() => {
  const wrapper = wrapperRef.current;

  if (!wrapper) return;

  const section = wrapper.closest("section");

  if (!section) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (
        !entry.isIntersecting ||
        hasAutoOpenedRef.current
      ) {
        return;
      }

      hasAutoOpenedRef.current = true;

      const isMobile = window.matchMedia(
        "(max-width: 767px)",
      ).matches;

      openBubble(
        isMobile
          ? mobileDuration
          : desktopDuration,
      );

      observer.disconnect();
    },
    {
      threshold: 0,
      rootMargin: "0px 0px -65% 0px",
    },
  );

  observer.observe(section);

  return () => {
    observer.disconnect();
    clearTimers();
  };
}, [
  desktopDuration,
  mobileDuration,
  openBubble,
  clearTimers,
]);

  return (
    <div
      ref={wrapperRef}
      className={`info-bulle-wrapper ${className}`.trim()}
    >
      {visible && (
        <div
          className={[
            "info-bulle-card",
            "card-glow",
            isDark
              ? "info-bulle-dark"
              : "info-bulle-light",
            phase === "opening"
              ? "is-opening"
              : "",
            phase === "open"
              ? "is-open"
              : "",
            phase === "dissolving"
              ? "is-dissolving"
              : "",
          ]
            .filter(Boolean)
            .join(" ")}
        >
          <div className="info-bulle-inner">
            {title && (
              <h3 className="info-bulle-title text-gradient-blue">
                {title}
              </h3>
            )}

            <div className="info-bulle-content">
              {children}
            </div>
          </div>
        </div>
      )}

      <button
        type="button"
        className="info-bulle-trigger"
        onClick={handleToggle}
        aria-expanded={visible}
        aria-label={
          visible
            ? "Fermer l’information"
            : "Afficher l’information"
        }
      >
        <img
          src="/decorations/bulle-de-message.png"
          alt=""
          className="info-bulle-trigger-img"
        />
      </button>
    </div>
  );
}