import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
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

  return (
    <main>
{/* Section 1 — Hero */}
<section className="section-dark relative overflow-hidden">
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
      <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {quickContacts.map((method) => {
          const Icon = method.icon;

          return (
            <a
              key={method.title}
              href={method.href}
              target={method.href.startsWith("http") ? "_blank" : undefined}
              rel={method.href.startsWith("http") ? "noreferrer" : undefined}
              className="card-dark group text-center"
            >
              <Icon
                className="mx-auto h-8 w-8 text-blue-400 transition duration-300 group-hover:scale-110"
                aria-hidden="true"
              />

              <h3 className="mt-4">{method.title}</h3>

              <p className="text-sm">{method.description}</p>
            </a>
          );
        })}

        <article className="card-dark text-center">
          <Clock3
            className="mx-auto h-8 w-8 text-blue-400"
            aria-hidden="true"
          />

          <h3 className="mt-4">Réponse</h3>

          <p className="text-sm">Rapide</p>
        </article>
      </div>
    </div>
  </div>

  {/* Photo — mobile */}
  <div className="relative z-10 px-4 sm:px-6 lg:hidden">
    <img
      src="/decorations/jessica-roussy-contact.webp"
      alt="Jessica, développeuse web et assistante technique chez Jess Tech"
      className="h-auto w-full"
    />
  </div>

  {/* Photo — ordinateur */}
  <div
    className="
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
</section>

      {/* Section 2 — Localisation et formulaire */}
      <section className="section-light section-spacing">
        <div className="site-container">
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
            <article className="card-dark relative overflow-hidden">
              <div
                className="pointer-events-none absolute -bottom-24 -right-20 h-64 w-64 rounded-full bg-blue-600/20 blur-[100px]"
                aria-hidden="true"
              />

              <div className="relative z-10">
                <div className="flex items-center gap-4">
                  <div className="rounded-2xl bg-blue-500/15 p-3">
                    <MapPin
                      className="h-7 w-7 text-blue-400"
                      aria-hidden="true"
                    />
                  </div>

                  <h2>Où j’interviens</h2>
                </div>

                <p>
                  Basée à Beaurieux(02), dans l’Aisne, j’interviens localement
                  auprès des particuliers, professionnels, associations et
                  collectivités.
                </p>

                <div className="mt-10 space-y-8">
                  <div className="flex gap-4">
                    <div className="h-fit rounded-full bg-blue-500/15 p-3">
                      <Car
                        className="h-6 w-6 text-blue-400"
                        aria-hidden="true"
                      />
                    </div>

                    <div>
                      <h3>Zone d’intervention locale</h3>

                      <p className="text-sm">
                        Environ 30 km autour de Beaurieux, selon le type
                        d’intervention.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="h-fit rounded-full bg-blue-500/15 p-3">
                      <Globe2
                        className="h-6 w-6 text-blue-400"
                        aria-hidden="true"
                      />
                    </div>

                    <div>
                      <h3>À distance, partout en France</h3>

                      <p className="text-sm">
                        La majorité des projets web peuvent être réalisés
                        entièrement à distance.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            <article className="card-light">
              <div className="section-intro">
                <p className="section-label">Votre demande</p>

                <h2>Envoyez-moi votre demande</h2>
              </div>

              <form
              onSubmit={handleSubmit}
              className="mt-8 space-y-5"
            >
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      Nom ou entreprise
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Votre nom"
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      Adresse e-mail
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="nom@exemple.fr"
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3"
                    />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      Téléphone{" "}
                      <span className="font-normal text-slate-400">
                        — facultatif
                      </span>
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="Votre numéro"
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      Sujet de votre demande
                    </label>

                    <select
                      id="subject"
                      name="subject"
                      required
                      defaultValue=""
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3"
                    >
                      <option value="" disabled>
                        Choisissez un sujet
                      </option>

                      <option value="creation">
                        Création de site internet
                      </option>

                      <option value="refonte">Refonte de site</option>

                      <option value="maintenance">Maintenance</option>

                      <option value="developpement">
                        Développement sur mesure
                      </option>

                      <option value="assistance">
                        Assistance technique
                      </option>

                      <option value="autre">Autre demande</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Parlez-moi de votre projet
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    placeholder="Expliquez-moi votre besoin, même en quelques lignes..."
                    className="w-full resize-y rounded-xl border border-slate-200 bg-white px-4 py-3"
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input
                    id="privacy"
                    name="privacy"
                    type="checkbox"
                    required
                    className="mt-1 h-4 w-4 rounded border-slate-300 accent-blue-600"
                  />

                  <label
                    htmlFor="privacy"
                    className="text-sm leading-6 text-slate-600"
                  >
                    J’accepte que mes informations soient utilisées pour me
                    recontacter et j’ai lu la{" "}
                    <Link
                      to="/politique-de-confidentialite"
                      className="font-semibold text-blue-600 hover:underline"
                    >
                      politique de confidentialité
                    </Link>
                    .
                  </label>
                </div>

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

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary inline-flex w-full items-center justify-center gap-3 transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-60"
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
                      <Send className="h-5 w-5" aria-hidden="true" />
                    </>
                  )}
                </button>

<div
  aria-live="polite"
  aria-atomic="true"
  className="min-h-[74px]"
>
  {formStatus === "success" && (
    <div
      className={`
        flex items-start gap-3 rounded-xl border border-emerald-200
        bg-emerald-50 p-4 text-emerald-800
        transition-all duration-300 ease-out
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
        flex items-start gap-3 rounded-xl border border-red-200
        bg-red-50 p-4 text-red-800
        transition-all duration-300 ease-out
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
      <section className="section-light section-spacing">
        <div className="site-container">
          <div className="section-intro text-center">
            <p className="section-label">Et ensuite ?</p>

            <h2>Comment se déroule la suite</h2>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <article key={step.number} className="card-light">
                  <div className="flex items-center gap-5">
                    <div className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-blue-500/10">
                      <Icon
                        className="h-8 w-8 text-blue-500"
                        aria-hidden="true"
                      />

                      <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">
                        {step.number}
                      </span>
                    </div>

                    <h3>{step.title}</h3>
                  </div>

                  <p>{step.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 4 — Autres moyens de contact */}
      <section className="section-light section-spacing">
        <div className="site-container">
          <div className="section-intro text-center">
            <p className="section-label">Restons en contact</p>

            <h2>Autres moyens de me contacter</h2>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {contactMethods.map((method) => {
              const Icon = method.icon;

              return (
                <a
                  key={method.title}
                  href={method.href}
                  target={method.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    method.href.startsWith("http") ? "noreferrer" : undefined
                  }
                  className="card-light group flex min-h-[220px] flex-col items-center text-center"
                >
                  <Icon
                    className="h-10 w-10 text-blue-500 transition duration-300 group-hover:scale-110"
                    aria-hidden="true"
                  />

                  <h3 className="mt-5">{method.title}</h3>

                  <p className="break-words text-sm font-medium">
                    {method.description}
                  </p>

                  <p className="text-xs">{method.infos}</p>
                </a>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}