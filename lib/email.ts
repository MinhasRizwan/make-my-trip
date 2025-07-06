// Email service integration
import nodemailer from "nodemailer"

const transporter = nodemailer.createTransporter({
  host: process.env.SMTP_HOST,
  port: Number.parseInt(process.env.SMTP_PORT || "587"),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

export async function sendConfirmationEmail(email: string, tripData: any) {
  const mailOptions = {
    from: process.env.FROM_EMAIL,
    to: email,
    subject: "Your Pakistan Trip Plan is Ready!",
    html: `
      <h1>Your Trip Plan</h1>
      <p>Dear ${tripData.personalInfo.fullName},</p>
      <p>Thank you for using PakTrips! Your personalized trip plan is ready.</p>
      <h2>${tripData.overview.title}</h2>
      <p><strong>Duration:</strong> ${tripData.overview.duration}</p>
      <p><strong>Total Cost:</strong> ₨${tripData.overview.totalCost.toLocaleString()}</p>
      <p>We'll contact you within 24 hours to finalize the details.</p>
      <p>Best regards,<br>PakTrips Team</p>
    `,
  }

  return transporter.sendMail(mailOptions)
}

export async function sendAdminNotification(quoteData: any) {
  const mailOptions = {
    from: process.env.FROM_EMAIL,
    to: process.env.ADMIN_EMAIL,
    subject: "New Quote Request - PakTrips",
    html: `
      <h1>New Quote Request</h1>
      <p><strong>Name:</strong> ${quoteData.personalInfo.fullName}</p>
      <p><strong>Email:</strong> ${quoteData.personalInfo.email}</p>
      <p><strong>Phone:</strong> ${quoteData.personalInfo.phone}</p>
      <p><strong>Destinations:</strong> ${quoteData.tripDetails.destination.join(", ")}</p>
      <p><strong>Duration:</strong> ${quoteData.tripDetails.duration}</p>
      <p><strong>Budget:</strong> ${quoteData.tripDetails.budget}</p>
      <p><strong>Requirements:</strong> ${quoteData.requirements}</p>
    `,
  }

  return transporter.sendMail(mailOptions)
}
