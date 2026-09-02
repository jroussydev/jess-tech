import type { FaqItem } from "../../data/faq";
import { ChevronDown } from "lucide-react";

type FaqProps = {
  label?: string;
  title: string;
  highlight?: string;
  description?: string;
  items: FaqItem[];
};

export default function Faq({
  label = "Questions fréquentes",
  title,
  highlight,
  description,
  items,
}: FaqProps) {
  return (
    <section className="section-light section-fade-light-soft section-spacing">
      <div className="site-container">

        {/* Introduction */}
        <div className="section-intro max-w-3xl">
          <p className="section-label">
            {label}
          </p>

          <h2>
            {title}{" "}

            {highlight && (
              <span className="text-gradient-blue">
                {highlight}
              </span>
            )}
          </h2>

          {description && (
            <p className="max-w-2xl text-slate-600">
              {description}
            </p>
          )}
        </div>

        {/* Questions */}
        <div className="mt-8 grid items-start gap-4 lg:grid-cols-2">
          {items.map(({ question, reponse }) => (
            <details
              key={question}
              className="
                group
                overflow-hidden
                rounded-2xl
                border
                border-sky-500/20
                bg-white/70
                shadow-sm
                transition
                duration-300

                open:border-sky-500/40
                open:shadow-md
              "
            >
              <summary
                className="
                  flex
                  cursor-pointer
                  list-none
                  items-center
                  justify-between
                  gap-4
                  px-5
                  py-4

                  sm:px-6
                  sm:py-5

                  [&::-webkit-details-marker]:hidden
                "
              >
                <span className="font-semibold leading-6 text-slate-950">
                  {question}
                </span>

                <ChevronDown
                  className="
                    h-5
                    w-5
                    shrink-0
                    text-sky-500
                    transition-transform
                    duration-300

                    group-open:rotate-180
                  "
                  aria-hidden="true"
                />
              </summary>

              {/* Réponse */}
              <div
                className="
                  border-t
                  border-sky-500/20
                  px-5
                  pb-5
                  pt-4

                  sm:px-6
                  sm:pb-6
                "
              >
                <p className="m-0 text-slate-600">
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