
import {

  FileText,
  Mail,
  MessageCircle,
  Phone,
  UserRound,
} from "lucide-react";

import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa6";

const contactMethods = [
    {
      title: "Beaurieux",
      description: "contact@jesstech.fr",
      icon: Mail,

    },
    {
      title: "Beaurieux",
      description: "contact@jesstech.fr",
      icon: Mail,

    },
    {
      title: "Beaurieux",
      description: "contact@jesstech.fr",
      icon: Mail,

    },
    {
      title: "Beaurieux",
      description: "contact@jesstech.fr",
      icon: Mail,

    },
    {
      title: "Beaurieux",
      description: "contact@jesstech.fr",
      icon: Mail,

    },
    {
      title: "Beaurieux",
      description: "contact@jesstech.fr",
      icon: Mail,

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
      src="/decorations/jessica-roussy-contact.png"
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
