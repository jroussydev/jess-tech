import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

type ContactFormData = {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  subject?: unknown;
  message?: unknown;
};

const subjectLabels: Record<string, string> = {
  creation: "Création de site internet",
  refonte: "Refonte de site",
  maintenance: "Maintenance",
  developpement: "Développement sur mesure",
  assistance: "Assistance technique",
  autre: "Autre demande",
};

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export default {
  async fetch(request: Request) {
    if (request.method !== "POST") {
      return Response.json(
        { message: "Méthode non autorisée" },
        { status: 405 },
      );
    }

    try {
      const body = (await request.json()) as ContactFormData;

      const name = typeof body.name === "string" ? body.name.trim() : "";
      const email = typeof body.email === "string" ? body.email.trim() : "";
      const phone = typeof body.phone === "string" ? body.phone.trim() : "";
      const subject =
        typeof body.subject === "string" ? body.subject.trim() : "";
      const message =
        typeof body.message === "string" ? body.message.trim() : "";

      if (!name || !email || !subject || !message) {
        return Response.json(
          { message: "Certains champs obligatoires sont manquants." },
          { status: 400 },
        );
      }

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailPattern.test(email)) {
        return Response.json(
          { message: "L’adresse e-mail est invalide." },
          { status: 400 },
        );
      }

      const readableSubject = subjectLabels[subject] ?? "Demande de contact";

      const { error } = await resend.emails.send({
        from: "Jess Tech <contact@jesstech.fr>",
        to: ["contact@jesstech.fr"],
        replyTo: email,
        subject: `[${readableSubject}] Nouveau message depuis jesstech.fr`,
        html: `
          <h1>Nouvelle demande depuis jesstech.fr</h1>

          <p><strong>Nom ou entreprise :</strong> ${escapeHtml(name)}</p>
          <p><strong>Adresse e-mail :</strong> ${escapeHtml(email)}</p>
          <p><strong>Téléphone :</strong> ${
            phone ? escapeHtml(phone) : "Non renseigné"
          }</p>
          <p><strong>Sujet :</strong> ${escapeHtml(readableSubject)}</p>

          <hr>

          <h2>Message</h2>
          <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
        `,
      });

      if (error) {
        console.error("Erreur Resend :", error);

        return Response.json(
          { message: "L’envoi du message a échoué." },
          { status: 500 },
        );
      }

      return Response.json(
        { message: "Votre demande a bien été envoyée." },
        { status: 200 },
      );
    } catch (error) {
      console.error("Erreur de la fonction contact :", error);

      return Response.json(
        { message: "Une erreur interne est survenue." },
        { status: 500 },
      );
    }
  },
};