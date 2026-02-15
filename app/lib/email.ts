import nodemailer from "nodemailer";

function requireEnv(name: string) {
  const value = process.env[name];
  if (!value || value.trim().length === 0) {
    throw new Error(`Missing env: ${name}`);
  }
  return value;
}

export function getAppBaseUrl() {
  return (process.env.NEXTAUTH_URL ?? "http://localhost:3000").replace(/\/$/, "");
}

export function getMailer() {
  const user = requireEnv("GMAIL_USER");
  const pass = requireEnv("GMAIL_APP_PASSWORD");

  return nodemailer.createTransport({
    service: "gmail",
    auth: { user, pass },
  });
}

export async function sendVerificationEmail(params: { to: string; verifyUrl: string }) {
  const from = process.env.EMAIL_FROM?.trim() || requireEnv("GMAIL_USER");
  const transporter = getMailer();

  await transporter.sendMail({
    from,
    to: params.to,
    subject: "Verifikasi email Monopoly Bank",
    text: `Klik link ini untuk verifikasi email: ${params.verifyUrl}`,
    html: `<p>Klik link ini untuk verifikasi email:</p><p><a href="${params.verifyUrl}">${params.verifyUrl}</a></p>`,
  });
}
