import { ChevronDown } from "lucide-react";
import type { FaqItem } from "../../data/faq";

type FaqProps = {
  label?: string;
  title: string;
  highlight?: string;
  description?: string;
  items: FaqItem[];
  variant?: "light" | "dark";
};

export default function GlobalFaq({
  label = "Questions fréquentes",
  title,
  highlight,
  description,
  items,
  variant = "light",
}: FaqProps) {
  const isDark = variant === "dark";

  return (
    <section
      className={`
        section-spacing
        ${
          isDark
            ? "section-dark section-fade-dark-soft "
            : "section-light section-fade-light-soft"
        }
      `}
    >
      <div className="site-container">
        {/* Introduction */}
        <div className="section-intro max-w-3xl">
          <p className="section-label">
            {label}
          </p>

          <h2 className={isDark ? "text-white" : ""}>
            {title}{" "}
            {highlight && (
              <span className="text-gradient-blue">
                {highlight}
              </span>
            )}
          </h2>

          {description && (
            <p
              className={
                isDark
                  ? "text-slate-300"
                  : "text-slate-600"
              }
            >
              {description}
            </p>
          )}
        </div>

        {/* FAQ */}
        <div className="mt-8 grid items-stretch gap-4 lg:grid-cols-2">
          {items.map(({ question, reponse }) => (
            <details
              key={question}
              className={`
                group
                h-full
                overflow-hidden

                ${
                  isDark
                    ? "card-dark card-glow !p-0"
                    : `
                      rounded-2xl
                      border
                      border-sky-500/20
                      bg-white/70
                      shadow-sm
                      transition
                      duration-300
                      open:border-sky-500/40
                      open:shadow-md
                    `
                }
              `}
            >
              <summary
                className={`
                  flex
                  cursor-pointer
                  list-none
                  items-center
                  justify-between
                  gap-4

                  [&::-webkit-details-marker]:hidden

                  ${
                    isDark
                      ? "px-4 py-4 sm:px-5"
                      : "px-5 py-4 sm:px-6 sm:py-5"
                  }
                `}
              >
                <span
                  className={`
                    font-semibold
                    leading-6

                    ${
                      isDark
                        ? "text-white"
                        : "text-slate-950"
                    }
                  `}
                >
                  {question}
                </span>

                <ChevronDown
                  className={`
                    h-5
                    w-5
                    shrink-0
                    transition-transform
                    duration-300
                    group-open:rotate-180

                    ${
                      isDark
                        ? "text-sky-400"
                        : "text-sky-500"
                    }
                  `}
                  aria-hidden="true"
                />
              </summary>

              {/* Réponse */}
              <div
                className={
                  isDark
                    ? `
                      mx-4
                      border-t
                      border-sky-500/20
                      pb-4
                      pt-3

                      sm:mx-5
                      sm:pb-5
                    `
                    : `
                      border-t
                      border-sky-500/20
                      px-5
                      pb-5
                      pt-4

                      sm:px-6
                      sm:pb-6
                    `
                }
              >
                <p
                  className={`
                    !m-0

                    ${
                      isDark
                        ? "text-slate-300"
                        : "text-slate-600"
                    }
                  `}
                >
                  {reponse}
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}