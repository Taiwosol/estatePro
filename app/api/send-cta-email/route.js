import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, property, location, budget, email, phone } = body;

    if (!name || !email) {
      return Response.json(
        { success: false, message: "Name and email are required" },
        { status: 400 },
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER || "your-email@gmail.com",
        pass: process.env.SMTP_PASS || "your-app-password",
      },
    });

    const mailOptions = {
      from: process.env.SMTP_FROM || "your-email@gmail.com",
      to: process.env.CTA_RECIPIENT_EMAIL || "hello@estatepro.com",
      replyTo: email,
      subject: `New Property Inquiry from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #c026d3; border-bottom: 2px solid #c026d3; padding-bottom: 10px;">
            New Property Inquiry
          </h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr style="background-color: #f9fafb;">
              <td style="padding: 12px; border: 1px solid #e5e7eb; font-weight: bold; width: 30%;">Name</td>
              <td style="padding: 12px; border: 1px solid #e5e7eb;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 12px; border: 1px solid #e5e7eb; font-weight: bold;">Email</td>
              <td style="padding: 12px; border: 1px solid #e5e7eb;">${email}</td>
            </tr>
            <tr style="background-color: #f9fafb;">
              <td style="padding: 12px; border: 1px solid #e5e7eb; font-weight: bold;">Phone</td>
              <td style="padding: 12px; border: 1px solid #e5e7eb;">${phone || "Not provided"}</td>
            </tr>
            <tr>
              <td style="padding: 12px; border: 1px solid #e5e7eb; font-weight: bold;">Property Type</td>
              <td style="padding: 12px; border: 1px solid #e5e7eb;">${property || "Not selected"}</td>
            </tr>
            <tr style="background-color: #f9fafb;">
              <td style="padding: 12px; border: 1px solid #e5e7eb; font-weight: bold;">Preferred Location</td>
              <td style="padding: 12px; border: 1px solid #e5e7eb;">${location || "Not selected"}</td>
            </tr>
            <tr>
              <td style="padding: 12px; border: 1px solid #e5e7eb; font-weight: bold;">Desired Budget</td>
              <td style="padding: 12px; border: 1px solid #e5e7eb;">${budget || "Not provided"}</td>
            </tr>
          </table>
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 12px;">
            This email was sent from EstatePro website contact form.
          </div>
        </div>
      `,
      text: `
New Property Inquiry
====================

Name: ${name}
Email: ${email}
Phone: ${phone || "Not provided"}
Property Type: ${property || "Not selected"}
Preferred Location: ${location || "Not selected"}
Desired Budget: ${budget || "Not provided"}
      `,
    };

    await transporter.sendMail(mailOptions);

    return Response.json({
      success: true,
      message:
        "Thank you! Your details have been sent successfully. We'll get back to you soon.",
    });
  } catch (error) {
    console.error("Error sending CTA email:", error);
    return Response.json(
      {
        success: false,
        message:
          "Something went wrong while sending your details. Please try again later.",
      },
      { status: 500 },
    );
  }
}
