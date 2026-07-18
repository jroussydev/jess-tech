/// <reference types="node" />

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

type ContactFormData = {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  subject?: unknown;
  message?: unknown;
  website?: unknown;
  turnstileToken?: unknown;
};

type TurnstileVerificationResponse = {
  success: boolean;
  hostname?: string;
  challenge_ts?: string;
  "error-codes"?: string[];
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
        { message: "Méthode non autorisée." },
        { status: 405 },
      );
    }

    try {
      const body = (await request.json()) as ContactFormData;

      const website =
        typeof body.website === "string"
          ? body.website.trim()
          : "";

      const name =
        typeof body.name === "string"
          ? body.name.trim()
          : "";

      const email =
        typeof body.email === "string"
          ? body.email.trim()
          : "";

      const phone =
        typeof body.phone === "string"
          ? body.phone.trim()
          : "";

      const subject =
        typeof body.subject === "string"
          ? body.subject.trim()
          : "";

      const message =
        typeof body.message === "string"
          ? body.message.trim()
          : "";

      const turnstileToken =
        typeof body.turnstileToken === "string"
          ? body.turnstileToken.trim()
          : "";

      /*
       * Honeypot
       *
       * Un utilisateur humain ne remplit jamais ce champ invisible.
       * Lorsqu’il contient une valeur, on simule un succès sans envoyer
       * d’e-mail afin de ne pas révéler le piège au robot.
       */
      if (website) {
        return Response.json(
          { message: "Votre demande a bien été envoyée." },
          { status: 200 },
        );
      }

      /*
       * Validation des champs du formulaire
       */
      if (!name || !email || !subject || !message) {
        return Response.json(
          {
            message:
              "Certains champs obligatoires sont manquants.",
          },
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

      /*
       * Présence du jeton Turnstile
       */
      if (!turnstileToken) {
        return Response.json(
          {
            message:
              "La vérification de sécurité est manquante. Veuillez actualiser la page et réessayer.",
          },
          { status: 400 },
        );
      }

      const turnstileSecretKey =
        process.env.TURNSTILE_SECRET_KEY;

        console.log(
  "TURNSTILE_SECRET_KEY:",
  process.env.TURNSTILE_SECRET_KEY,
);

      if (!turnstileSecretKey) {
        console.error(
          "La variable TURNSTILE_SECRET_KEY est absente.",
        );

        return Response.json(
          {
            message:
              "Le service de vérification est temporairement indisponible.",
          },
          { status: 500 },
        );
      }

      /*
       * Vérification du jeton auprès de Cloudflare
       */
      const turnstileResponse = await fetch(
        "https://challenges.cloudflare.com/turnstile/v0/siteverify",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            secret: turnstileSecretKey,
            response: turnstileToken,
          }),
        },
      );

      if (!turnstileResponse.ok) {
        console.error(
          "Cloudflare Siteverify est indisponible :",
          turnstileResponse.status,
        );

        return Response.json(
          {
            message:
              "La vérification de sécurité est temporairement indisponible. Veuillez réessayer.",
          },
          { status: 502 },
        );
      }

      const turnstileResult =
        (await turnstileResponse.json()) as TurnstileVerificationResponse;

      if (!turnstileResult.success) {
        console.warn(
          "Échec de la vérification Turnstile :",
          turnstileResult["error-codes"],
        );

        return Response.json(
          {
            message:
              "La vérification de sécurité a expiré ou a échoué. Veuillez réessayer.",
          },
          { status: 403 },
        );
      }

      /*
       * Le formulaire est valide et le visiteur a été vérifié.
       * L’e-mail peut maintenant être envoyé.
       */
      const readableSubject =
        subjectLabels[subject] ?? "Demande de contact";

/*
 * Envoi de la demande à Jess Tech
 */
const { error: contactEmailError } = await resend.emails.send({
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
  text: `
Nouvelle demande depuis jesstech.fr

Nom ou entreprise : ${name}
Adresse e-mail : ${email}
Téléphone : ${phone || "Non renseigné"}
Sujet : ${readableSubject}

Message :
${message}
  `.trim(),
});

if (contactEmailError) {
  console.error(
    "Erreur Resend lors de l’envoi à Jess Tech :",
    contactEmailError,
  );

  return Response.json(
    { message: "L’envoi du message a échoué." },
    { status: 500 },
  );
}

/*
 * Accusé de réception envoyé automatiquement au visiteur
 */
const { error: confirmationEmailError } =
  await resend.emails.send({
    from: "Jessica de Jess Tech <contact@jesstech.fr>",
    to: [email],
    replyTo: "contact@jesstech.fr",
    subject: "Votre message a bien été reçu — Jess Tech",
    html: `
      <!doctype html>
      <html lang="fr">
        <body
          style="
            margin: 0;
            padding: 0;
            background-color: #f1f5f9;
            font-family: Arial, Helvetica, sans-serif;
            color: #0f172a;
          "
        >
          <div style="padding: 32px 16px;">
            <div
              style="
                max-width: 620px;
                margin: 0 auto;
                overflow: hidden;
                border: 1px solid #dbeafe;
                border-radius: 20px;
                background-color: #ffffff;
              "
            >
              <div
                style="
                  padding: 28px 32px;
                  background-color: #020817;
                  color: #ffffff;
                "
              >
                <p
                  style="
                    margin: 0;
                    color: #60a5fa;
                    font-size: 13px;
                    font-weight: 700;
                    letter-spacing: 0.08em;
                    text-transform: uppercase;
                  "
                >
                  Jess Tech
                </p>

                <h1
                  style="
                    margin: 10px 0 0;
                    font-size: 26px;
                    line-height: 1.3;
                  "
                >
                  Votre message a bien été reçu
                </h1>
              </div>

              <div style="padding: 32px;">
                <p
                  style="
                    margin: 0 0 20px;
                    font-size: 16px;
                    line-height: 1.7;
                  "
                >
                  Bonjour ${escapeHtml(name)},
                </p>

                <p
                  style="
                    margin: 0 0 20px;
                    font-size: 16px;
                    line-height: 1.7;
                  "
                >
                  Merci de m’avoir contactée. Je vous confirme avoir
                  bien reçu votre demande concernant :
                  <strong>${escapeHtml(readableSubject)}</strong>.
                </p>

                <p
                  style="
                    margin: 0 0 20px;
                    font-size: 16px;
                    line-height: 1.7;
                  "
                >
                  Je vais en prendre connaissance et je vous répondrai
                  dans les meilleurs délais, généralement sous
                  48 heures ouvrées.
                </p>

                <div
                  style="
                    margin: 28px 0;
                    padding: 18px 20px;
                    border-left: 4px solid #0d5bff;
                    border-radius: 10px;
                    background-color: #eff6ff;
                  "
                >
                  <p
                    style="
                      margin: 0;
                      color: #1e3a8a;
                      font-size: 14px;
                      line-height: 1.6;
                    "
                  >
                    Cet e-mail est un accusé de réception automatique.
                    Vous pouvez néanmoins y répondre directement si vous
                    souhaitez apporter une précision à votre demande.
                  </p>
                </div>

                <p
                  style="
                    margin: 0;
                    font-size: 16px;
                    line-height: 1.7;
                  "
                >
                  À bientôt,
                  <br />
                  <strong>Jessica Roussy</strong>
                  <br />
                  Développeuse web &amp; assistante technique
                  <br />
                  Jess Tech
                </p>
              </div>

              <div
                style="
                  padding: 20px 32px;
                  border-top: 1px solid #e2e8f0;
                  background-color: #f8fafc;
                  color: #64748b;
                  font-size: 12px;
                  line-height: 1.6;
                "
              >
                Message envoyé automatiquement à la suite d’une demande
                effectuée sur jesstech.fr.
              </div>
            </div>
          </div>
        </body>
      </html>
    `,
    text: `
Bonjour ${name},

Merci de m’avoir contactée.

Je vous confirme avoir bien reçu votre demande concernant :
${readableSubject}.

Je vais en prendre connaissance et je vous répondrai dans les meilleurs délais, généralement sous 48 heures ouvrées.

Cet e-mail est un accusé de réception automatique. Vous pouvez y répondre directement si vous souhaitez apporter une précision à votre demande.

À bientôt,

Jessica Roussy
Développeuse web & assistante technique
Jess Tech
    `.trim(),
  });

if (confirmationEmailError) {
  console.error(
    "La demande a été reçue, mais l’accusé de réception n’a pas pu être envoyé :",
    confirmationEmailError,
  );
}
return Response.json(
  { message: "Votre demande a bien été envoyée." },
  { status: 200 },
);


    } catch (error) {
      console.error(
        "Erreur de la fonction contact :",
        error,
      );

      return Response.json(
        { message: "Une erreur interne est survenue." },
        { status: 500 },
      );
    }
  },
};