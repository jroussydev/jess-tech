export default function Contact() {
  return (
    <main className="px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#0D5BFF]">
          Contact
        </p>

        <h1 className="text-4xl font-bold text-[#001A5A]">
          Me contacter
        </h1>

        <p className="mt-6 max-w-3xl text-lg text-slate-600 leading-8">
          Vous avez un projet de site web, une refonte à prévoir ou besoin d’un
          accompagnement technique ? Vous pouvez me contacter simplement par
          email.
        </p>

        <a
          href="mailto:contact@jesstech.fr"
          className="mt-8 inline-block rounded-full bg-[#0D5BFF] px-6 py-3 font-semibold text-white shadow-md transition duration-300 hover:-translate-y-1 hover:bg-[#001A5A] hover:shadow-xl"
        >
          contact@jesstech.fr
        </a>
      </div>
    </main>
  )
}