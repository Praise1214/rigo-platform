import nodemailer from 'nodemailer'

// ─── Transporter ─────────────────────────────────────────────────────────────
// The transporter is the "connection" to Gmail's SMTP server.
// It authenticates with your Gmail account using the App Password
// (not your regular password — Google blocks that for apps).
// ─────────────────────────────────────────────────────────────────────────────

export const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
})

// ─── sendEmail ────────────────────────────────────────────────────────────────
// A simple wrapper so every API route uses the same "from" address
// and you don't repeat boilerplate everywhere.
// ─────────────────────────────────────────────────────────────────────────────

interface SendEmailOptions {
  to: string
  subject: string
  html: string
}

export async function sendEmail({ to, subject, html }: SendEmailOptions) {
  return transporter.sendMail({
    from: `"Rising Generation (RIGO)" <${process.env.GMAIL_USER}>`,
    to,
    subject,
    html,
  })
}
