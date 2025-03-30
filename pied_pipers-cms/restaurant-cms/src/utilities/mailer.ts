import nodemailer from 'nodemailer'

//create transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

export const sendContactNotification = async (submission: any) => {
  await transporter.sendMail({
    from: process.env.SMTP_FROM,
    to: process.env.ADMIN_EMAIL,
    subject: `New Contact Form Submission: ${submission.subject}`,
    html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>From:</strong> ${submission.name} (${submission.email})</p>
        <p><strong>Subject:</strong> ${submission.subject}</p>
        <p><strong>Message:</strong></p>
        <p>${submission.message}</p>
        `,
  })
}
