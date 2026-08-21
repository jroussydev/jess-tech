import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import {
  Turnstile,
  type TurnstileInstance,
} from "@marsidev/react-turnstile";
import {
  Car,
  Clock3,
  FileText,
  Globe2,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  UserRound,
  CheckCircle2,
CircleAlert,
LoaderCircle,
} from "lucide-react";

import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa6";
import AnimatedCardBorder from "../../components/decorations/AnimatedCardBorder";

export default function Contact() {
  type FormStatus = "idle" | "success" | "error";

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<FormStatus>("idle");
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [isFeedbackVisible, setIsFeedbackVisible] = useState(false);

  const [turnstileToken, setTurnstileToken] = useState("");

const turnstileRef = useRef<TurnstileInstance | null>(null);

  useEffect(() => {
    if (formStatus === "idle") return;

    // Le message commence à disparaître après 4,7 secondes.
    const hideTimer = window.setTimeout(() => {
      setIsFeedbackVisible(false);
    }, 4700);

    // Le message est ensuite retiré du HTML après son animation.
    const clearTimer = window.setTimeout(() => {
      setFormStatus("idle");
      setFeedbackMessage("");
    }, 5000);

    return () => {
      window.clearTimeout(hideTimer);
      window.clearTimeout(clearTimer);
    };
  }, [formStatus]);

async function handleSubmit(
  event: React.FormEvent<HTMLFormElement>,
) {
  event.preventDefault();

  if (!turnstileToken) {
    setFormStatus("error");
    setFeedbackMessage(
      "La vérification de sécurité n’est pas encore terminée. Veuillez patienter quelques secondes.",
    );
    setIsFeedbackVisible(true);
    return;
  }

  const formElement = event.currentTarget;

  setIsSubmitting(true);
  setFormStatus("idle");
  setFeedbackMessage("");
  setIsFeedbackVisible(false);

  const form = new FormData(formElement);

  const body = {
    ...Object.fromEntries(form),
    turnstileToken,
  };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      const responseText = await response.text();

      let result: { message?: string } = {};

      if (responseText) {
        try {
          result = JSON.parse(responseText) as {
            message?: string;
          };
        } catch {
          result = {};
        }
      }

      if (!response.ok) {
        throw new Error(
          result.message || "L’envoi de votre demande a échoué.",
        );
      }

      formElement.reset();
      turnstileRef.current?.reset();
setTurnstileToken("");

      setFormStatus("success");
      setFeedbackMessage(
        "Votre message a bien été envoyé ! Je vous répondrai dans les meilleurs délais.",
      );

      requestAnimationFrame(() => {
        setIsFeedbackVisible(true);
      });
    } catch (error) {
      setFormStatus("error");
      setFeedbackMessage(
        error instanceof Error
          ? error.message
          : "Une erreur est survenue. Veuillez réessayer dans quelques instants.",
      );

      requestAnimationFrame(() => {
        setIsFeedbackVisible(true);
      });
    } finally {
        setIsSubmitting(false);
        turnstileRef.current?.reset();
        setTurnstileToken("");
    }
  }

  const contactMethods = [
    {
      title: "E-mail",
      description: "contact@jesstech.fr",
      infos: "Réponse sous 48 h maximum",
      icon: Mail,
      href: "mailto:contact@jesstech.fr",
    },
    {
      title: "Téléphone",
      description: "07 67 87 63 16",
      infos: "Lundi au vendredi, de 9 h à 20 h",
      icon: Phone,
      href: "tel:+33767876316",
    },
    {
      title: "WhatsApp",
      description: "Discutons en direct",
      infos: "Échange rapide et direct",
      icon: FaWhatsapp,
      href: "https://wa.me/33767876316",
    },
    {
      title: "LinkedIn",
      description: "Mon profil professionnel",
      infos: "Retrouvez Jess Tech sur LinkedIn",
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/jessica-roussy-jesstech",
    },
    {
      title: "Page Facebook",
      description: "Retrouvez Jess Tech",
      infos: "Actualités et informations",
      icon: FaFacebook,
      href: "https://www.facebook.com/share/1EAwbZ98WK/",
    },
    {
      title: "GitHub",
      description: "github.com/jroussydev",
      infos: "Mes projets et réalisations",
      icon: FaGithub,
      href: "https://github.com/jroussydev",
    },
  ];

  const quickContacts = contactMethods.slice(0, 3);

  const steps = [
    {
      number: "1",
      title: "Vous présentez votre besoin",
      description:
        "Quelques informations suffisent pour comprendre votre projet et vos attentes.",
      icon: MessageCircle,
    },
    {
      number: "2",
      title: "J’étudie votre demande",
      description:
        "J’analyse votre besoin et je vérifie les éléments nécessaires à sa réalisation.",
      icon: FileText,
    },
    {
      number: "3",
      title: "Nous échangeons sur la solution",
      description:
        "Nous faisons le point ensemble afin de définir la solution la plus adaptée.",
      icon: UserRound,
    },
  ];

const stepsSectionRef = useRef<HTMLElement | null>(null);
const [stepsAnimationVisible, setStepsAnimationVisible] = useState(false);

useEffect(() => {
  const section = stepsSectionRef.current;

  if (!section) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setStepsAnimationVisible(true);
        observer.unobserve(section);
      }
    },
    {
      threshold: 0.35,
    },
  );

  observer.observe(section);

  return () => observer.disconnect();
}, []);

  return (
    <main>
{/* Section 1 — Hero */}
<section className="section-dark relative overflow-visible">
  {/* Halos décoratifs */}
  <div
    className="pointer-events-none absolute left-1/4 top-0 h-96 w-96 rounded-full bg-blue-600/10 blur-[130px]"
    aria-hidden="true"
  />

  <div
    className="pointer-events-none absolute right-0 top-1/4 h-96 w-96 rounded-full bg-blue-600/10 blur-[140px]"
    aria-hidden="true"
  />

  {/* Contenu */}
  <div className="site-container relative z-20">
    <div className="py-16 md:py-20 lg:min-h-[680px] lg:w-[52%] lg:py-24">
      <div className="section-intro">
        <p className="section-label">Contact</p>

        <h1>
          Parlons de{" "}
          <span className="bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">
            votre projet
          </span>
        </h1>

        <p className="max-w-xl">
          Vous avez un projet de site internet, une question technique ou
          simplement besoin d’aide pour y voir plus clair ?
          <br />
          Présentez-moi votre besoin, même s’il n’est pas encore complètement
          défini.
        </p>
      </div>

      {/* Contacts rapides */}
<div className="mt-10 grid grid-cols-4 gap-2 sm:gap-3 xl:gap-4">
  {quickContacts.map((method) => {
    const Icon = method.icon;

    return (
      <a
        key={method.title}
        href={method.href}
        target={method.href.startsWith("http") ? "_blank" : undefined}
        rel={method.href.startsWith("http") ? "noreferrer" : undefined}
        className="
          card-dark
          card-glow
          group
          min-w-0
          overflow-hidden
          text-center
          !p-2
          sm:!p-3
          lg:!p-4
        "
      >
        <Icon
          className="
            mx-auto
            h-6
            w-6
            text-blue-400
            transition
            duration-300
            group-hover:scale-110

            sm:h-7
            sm:w-7
            lg:h-8
            lg:w-8
          "
          aria-hidden="true"
        />

        <h3
          className="
            mt-2
            whitespace-nowrap
            !text-xs
            leading-tight

            sm:!text-sm
            lg:mt-4
            lg:!text-base
          "
        >
          {method.title}
        </h3>

        <p
          className="
            !mt-1
            min-w-0
            overflow-hidden
            text-ellipsis
            whitespace-nowrap
            !text-[10px]
            !leading-4

            sm:!text-xs
            lg:!text-sm
          "
        >
          {method.description}
        </p>
      </a>
    );
  })}

  <article
    className="
      card-dark
      card-glow
      min-w-0
      overflow-hidden
      text-center
      !p-2
      sm:!p-3
      lg:!p-4
    "
  >
    <Clock3
      className="
        mx-auto
        h-6
        w-6
        text-blue-400
        sm:h-7
        sm:w-7
        lg:h-8
        lg:w-8
      "
      aria-hidden="true"
    />

    <h3
      className="
        mt-2
        whitespace-nowrap
        !text-xs
        leading-tight

        sm:!text-sm
        lg:mt-4
        lg:!text-base
      "
    >
      Réponse
    </h3>

    <p
      className="
        !mt-1
        whitespace-nowrap
        !text-[10px]
        !leading-4

        sm:!text-xs
        lg:!text-sm
      "
    >
      Sous 24h
    </p>
  </article>
</div>
    </div>
  </div>

  {/* Visuel mobile / tablette */}
<div className="hero__visual-mobile">
  <div className="hero__visual-mobile-mask">
    <img
      src="/contact/jessica-roussy-contact.png"
      alt=""
      aria-hidden="true"
      className="
        hero__visual-mobile-image
        contact-hero__image
      "
    />
  </div>
</div>

{/* Visuel desktop */}
<div
  className="
    contact-hero__visual
    pointer-events-none
    absolute
    inset-y-0
    right-0
    z-10
    hidden
    w-[58%]
    lg:block
  "
>
  <img
    src="/contact/jessica-roussy-contact.png"
    alt=""
    aria-hidden="true"
    className="
      absolute
      bottom-0
      right-0
      h-full
      w-auto
      max-w-none
    "
  />
</div>
  {/* Vague basse */}
        <img
          src="/decorations/vagues/09.png"
          alt=""
          aria-hidden="true"
          className="hero__wave z-30"
        />
</section>

      {/* Section 2 — Localisation et formulaire */}
{/* Section 2 — Localisation et formulaire */}
<section className="section-light section-fade-hero section-spacing">
  <div className="site-container">
    <div className="grid items-start gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">

      {/* Localisation */}
      <div className="pt-2 lg:pt-6">
        <div className="flex items-center gap-3">
          <MapPin
            className="h-7 w-7 shrink-0 text-sky-500"
            aria-hidden="true"
          />

          <h2>Où j’interviens</h2>
        </div>

        <p className="mt-5 max-w-xl text-slate-600">
          Basée à Beaurieux (02), dans l’Aisne, j’interviens localement
          auprès des particuliers, professionnels, associations et
          collectivités.
        </p>

        <div className="mt-10 flex flex-col gap-7">

          {/* Zone d’intervention locale */}
          <div className="group">
            <div className="flex items-center gap-3">
              <Car
                className="
                  h-7
                  w-7
                  shrink-0
                  text-sky-500
                  transition-transform
                  duration-300
                  group-hover:scale-110
                "
                aria-hidden="true"
              />

              <h3 className="text-slate-950">
                Zone d’intervention locale
              </h3>
            </div>

            <p className="mt-2 max-w-lg text-slate-600">
              Environ 30 km autour de Beaurieux, selon le type
              d’intervention.
            </p>
          </div>

          {/* Séparation */}
          <div
            className="h-px w-full bg-sky-500/20"
            aria-hidden="true"
          />

          {/* Intervention à distance */}
          <div className="group">
            <div className="flex items-center gap-3">
              <Globe2
                className="
                  h-7
                  w-7
                  shrink-0
                  text-sky-500
                  transition-transform
                  duration-300
                  group-hover:scale-110
                "
                aria-hidden="true"
              />

              <h3 className="text-slate-950">
                À distance, partout en France
              </h3>
            </div>

            <p className="mt-2 max-w-lg text-slate-600">
              La majorité des projets web peuvent être réalisés
              entièrement à distance.
            </p>
          </div>
        </div>
      </div>

      {/* Formulaire */}
      <article
  className="
    card-dark
    card-glow
    relative
    overflow-hidden
    !px-6
    !py-3
    sm:!px-8
    sm:!py-4
  "
>
        <div className="section-intro">
          <p className="section-label mt-4 mb-0">
            Votre demande
          </p>

          <h2 className="text-slate-100">
            Envoyez-moi votre demande
          </h2>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-5"
        >
          {/* Nom + e-mail */}
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-semibold text-slate-300"
              >
                Nom ou entreprise
              </label>

              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Votre nom"
                className="
                  w-full
                  rounded-xl
                  border
                  border-sky-500/20
                  bg-slate-950/60
                  px-4
                  py-3
                  text-slate-200
                  outline-none
                  transition
                  placeholder:text-slate-500
                  focus:border-sky-500/60
                  focus:ring-2
                  focus:ring-sky-500/10
                "
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-semibold text-slate-300"
              >
                Adresse e-mail
              </label>

              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="nom@exemple.fr"
                className="
                  w-full
                  rounded-xl
                  border
                  border-sky-500/20
                  bg-slate-950/60
                  px-4
                  py-3
                  text-slate-200
                  outline-none
                  transition
                  placeholder:text-slate-500
                  focus:border-sky-500/60
                  focus:ring-2
                  focus:ring-sky-500/10
                "
              />
            </div>
          </div>

          {/* Téléphone + sujet */}
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label
                htmlFor="phone"
                className="mb-2 block text-sm font-semibold text-slate-300"
              >
                Téléphone{" "}
                <span className="font-normal text-slate-500">
                  — facultatif
                </span>
              </label>

              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="Votre numéro"
                className="
                  w-full
                  rounded-xl
                  border
                  border-sky-500/20
                  bg-slate-950/60
                  px-4
                  py-3
                  text-slate-200
                  outline-none
                  transition
                  placeholder:text-slate-500
                  focus:border-sky-500/60
                  focus:ring-2
                  focus:ring-sky-500/10
                "
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="mb-2 block text-sm font-semibold text-slate-300"
              >
                Sujet de votre demande
              </label>

              <select
                id="subject"
                name="subject"
                required
                defaultValue=""
                className="
                  w-full
                  cursor-pointer
                  rounded-xl
                  border
                  border-sky-500/30
                  bg-slate-950
                  px-4
                  py-3
                  text-slate-200
                  outline-none
                  transition
                  focus:border-sky-500/70
                  focus:ring-2
                  focus:ring-sky-500/10
                "
              >
                <option
                  value=""
                  disabled
                  className="bg-slate-950 text-slate-500"
                >
                  Choisissez un sujet
                </option>

                <option
                  value="creation"
                  className="bg-slate-950 text-slate-200"
                >
                  Création de site internet
                </option>

                <option
                  value="refonte"
                  className="bg-slate-950 text-slate-200"
                >
                  Refonte de site
                </option>

                <option
                  value="maintenance"
                  className="bg-slate-950 text-slate-200"
                >
                  Maintenance
                </option>

                <option
                  value="developpement"
                  className="bg-slate-950 text-slate-200"
                >
                  Développement sur mesure
                </option>

                <option
                  value="assistance"
                  className="bg-slate-950 text-slate-200"
                >
                  Assistance technique
                </option>

                <option
                  value="autre"
                  className="bg-slate-950 text-slate-200"
                >
                  Autre demande
                </option>
              </select>
            </div>
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="mb-2 block text-sm font-semibold text-slate-300"
            >
              Parlez-moi de votre projet
            </label>

            <textarea
              id="message"
              name="message"
              required
              rows={6}
              placeholder="Expliquez-moi votre besoin, même en quelques lignes..."
              className="
                w-full
                resize-y
                rounded-xl
                border
                border-sky-500/20
                bg-slate-950/60
                px-4
                py-3
                text-slate-200
                outline-none
                transition
                placeholder:text-slate-500
                focus:border-sky-500/60
                focus:ring-2
                focus:ring-sky-500/10
              "
            />
          </div>

          {/* Confidentialité */}
          <div className="flex items-start gap-3">
            <input
              id="privacy"
              name="privacy"
              type="checkbox"
              required
              className="
                mt-1
                h-4
                w-4
                rounded
                border-slate-600
                accent-sky-500
              "
            />

            <label
              htmlFor="privacy"
              className="text-sm leading-6 text-slate-400"
            >
              J’accepte que mes informations soient utilisées pour me
              recontacter et j’ai lu la{" "}
              <Link
                to="/politique-de-confidentialite"
                className="font-semibold text-sky-500 hover:underline"
              >
                politique de confidentialité
              </Link>
              .
            </label>
          </div>

          {/* Champ anti-spam invisible */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor="website">
              Ne pas remplir ce champ
            </label>

            <input
              id="website"
              name="website"
              type="text"
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          {/* Vérification Cloudflare */}
          <Turnstile
            ref={turnstileRef}
            siteKey={import.meta.env.VITE_TURNSTILE_SITE_KEY}
            options={{
              theme: "dark",
              size: "flexible",
            }}
            onSuccess={(token) => {
              setTurnstileToken(token);
            }}
            onExpire={() => {
              setTurnstileToken("");
            }}
            onError={() => {
              setTurnstileToken("");
            }}
          />

          {/* Envoi */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="
              btn-primary
              inline-flex
              w-full
              items-center
              justify-center
              gap-3
              transition-all
              duration-200
              disabled:cursor-not-allowed
              disabled:opacity-60
            "
          >
            {isSubmitting ? (
              <>
                Envoi en cours…
                <LoaderCircle
                  className="h-4 w-4 animate-spin"
                  strokeWidth={2.5}
                  aria-hidden="true"
                />
              </>
            ) : (
              <>
                Envoyer mon message
                <Send
                  className="h-5 w-5"
                  aria-hidden="true"
                />
              </>
            )}
          </button>

          {/* Message de retour */}
          <div
            aria-live="polite"
            aria-atomic="true"
            className="min-h-[74px]"
          >
            {formStatus === "success" && (
              <div
                className={`
                  flex
                  items-start
                  gap-3
                  rounded-xl
                  border
                  border-emerald-500/30
                  bg-emerald-500/10
                  p-4
                  text-emerald-300
                  transition-all
                  duration-300
                  ease-out
                  ${
                    isFeedbackVisible
                      ? "translate-y-0 opacity-100"
                      : "-translate-y-2 opacity-0"
                  }
                `}
                role="status"
              >
                <CheckCircle2
                  className="mt-0.5 h-5 w-5 shrink-0"
                  aria-hidden="true"
                />

                <div>
                  <p className="m-0 text-sm font-semibold">
                    Votre message a bien été envoyé !
                  </p>

                  <p className="mt-1 text-sm">
                    Je vous répondrai dans les meilleurs délais.
                  </p>
                </div>
              </div>
            )}

            {formStatus === "error" && (
              <div
                className={`
                  flex
                  items-start
                  gap-3
                  rounded-xl
                  border
                  border-red-500/30
                  bg-red-500/10
                  p-4
                  text-red-300
                  transition-all
                  duration-300
                  ease-out
                  ${
                    isFeedbackVisible
                      ? "translate-y-0 opacity-100"
                      : "-translate-y-2 opacity-0"
                  }
                `}
                role="alert"
              >
                <CircleAlert
                  className="mt-0.5 h-5 w-5 shrink-0"
                  aria-hidden="true"
                />

                <p className="m-0 text-sm font-medium">
                  {feedbackMessage}
                </p>
              </div>
            )}
          </div>
        </form>
      </article>
    </div>
  </div>
</section>

      {/* Section 3 — Et ensuite ? */}
<section
  ref={stepsSectionRef}
  className="section-dark section-fade-dark-soft section-spacing section-mask"
>
  <div className="site-container">

    {/* Introduction */}
    <div className="section-intro max-w-3xl">
      <p className="section-label">
        Et ensuite ?
      </p>

      <h2>
        Comment se déroule la suite
      </h2>
    </div>

    {/* Étapes */}
    <div className="mt-7 grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-10">
      {steps.map((step, index) => {
        const Icon = step.icon;

        return (
          <div
            key={step.number}
            className="relative min-w-0"
          >
            {/* Carte */}
            <article
              className="
                card-dark
                card-glow
                group
                relative
                z-10
                flex
                h-full
                min-w-0
                flex-col
                !p-4
                sm:!p-5
              "
            >
              {/* Icône + titre + numéro */}
              <div className="flex items-center gap-3">
                <Icon
                  className="
                    h-7
                    w-7
                    shrink-0
                    text-sky-500
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                  aria-hidden="true"
                />

                <h3 className="min-w-0 flex-1">
                  {step.title}
                </h3>

                
              </div>

              <p className="mt-3 text-slate-300">
                {step.description}
              </p>
            </article>

            {/* Flèche interactive vers la carte suivante */}
            {index < steps.length - 1 && (
              <div
                className="
                  pointer-events-none
                  absolute
                  left-full
                  top-1/2
                  z-20
                  hidden
                  h-8
                  w-10
                  -translate-y-1/2
                  lg:flex
                  lg:items-center
                "
                aria-hidden="true"
              >
                <div
                  className={`
                    relative
                    h-[7px]
                    w-[calc(100%_-_10px)]
                    origin-left
                    rounded-full
                    bg-gradient-to-r
                    from-[#0D5BFF]
                    via-blue-500
                    to-blue-300
                    shadow-[0_0_10px_rgba(13,91,255,0.55)]
                    transition-transform
                    duration-700
                    ease-out
                    ${
                      stepsAnimationVisible
                        ? "scale-x-100"
                        : "scale-x-0"
                    }
                  `}
                  style={{
                    transitionDelay: `${index * 550 + 300}ms`,
                  }}
                >
                  {/* Pointe */}
                  <span
                    className={`
                      absolute
                      left-full
                      top-1/2
                      h-5
                      w-5
                      -translate-x-1
                      -translate-y-1/2
                      bg-blue-300
                      drop-shadow-[0_0_8px_rgba(96,165,250,0.8)]
                      transition-all
                      duration-300
                      ${
                        stepsAnimationVisible
                          ? "scale-100 opacity-100"
                          : "scale-0 opacity-0"
                      }
                    `}
                    style={{
                      clipPath:
                        "polygon(0 0, 100% 50%, 0 100%)",
                      transitionDelay: `${index * 550 + 850}ms`,
                    }}
                  />

                  {/* Impulsion lumineuse */}
                  {stepsAnimationVisible && (
                    <span
                      className="
                        services-project-pulse
                        absolute
                        left-0
                        top-1/2
                        h-3
                        w-3
                        -translate-y-1/2
                        rounded-full
                        bg-white
                        shadow-[0_0_12px_#ffffff,0_0_20px_#60a5fa]
                      "
                      style={{
                        animationDelay: `${index * 350 + 450}ms`,
                      }}
                    />
                  )}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>

  </div>
</section>

      {/* Section 4 — Autres moyens de contact */}
<section className="section-light section-fade-light-soft section-spacing">
  <div className="site-container">

    {/* Introduction */}
    <div className="section-intro max-w-3xl">
      <p className="section-label">
        Restons en contact
      </p>

      <h2>
        Autres moyens de me{" "}
        <span className="text-gradient-blue">
          contacter
        </span>
      </h2>
    </div>

    {/* Moyens de contact */}
<div
  className="
    mt-8
    grid
    grid-cols-2
    gap-3
    sm:grid-cols-3
    sm:gap-4
    lg:grid-cols-3
    xl:grid-cols-6
  "
>
  {contactMethods.map((method) => {
    const Icon = method.icon;

    return (
      <div
        key={method.title}
        className="
          group
          relative
          min-w-0
          overflow-hidden
          rounded-2xl
        "
      >
        {/* Bordure animée limitée à CETTE carte */}
        <AnimatedCardBorder />

        <a
          href={method.href}
          target={method.href.startsWith("http") ? "_blank" : undefined}
          rel={
            method.href.startsWith("http")
              ? "noreferrer"
              : undefined
          }
          className="
            card-dark
            card-glow
            relative
            z-10
            flex
            h-full
            min-w-0
            flex-col
            items-center
            text-center
            !p-3
            sm:!p-4
          "
        >
          {/* Icône */}
          <Icon
            className="
              h-7
              w-7
              shrink-0
              text-sky-500
              transition-transform
              duration-300
              group-hover:scale-110
              sm:h-8
              sm:w-8
            "
            aria-hidden="true"
          />

          {/* Titre */}
          <h3 className="mt-3 text-slate-200">
            {method.title}
          </h3>

          {/* Coordonnée / description */}
          <p
            className="
              !mt-2
              break-words
              text-slate-300
              !text-xs
              sm:!text-sm
            "
          >
            {method.description}
          </p>

          {/* Information complémentaire */}
          <p
            className="
              !mt-2
              text-slate-400
              !text-xs
            "
          >
            {method.infos}
          </p>
        </a>
      </div>
    );
  })}
</div>
  </div>
</section>
    </main>
  );
}