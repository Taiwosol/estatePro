import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email) {
      return Response.json(
        { success: false, message: "Email is required" },
        { status: 400 },
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return Response.json(
        { success: false, message: "Please provide a valid email address" },
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

    const adminMailOptions = {
      from: process.env.SMTP_FROM || "your-email@gmail.com",
      to: process.env.NEWSLETTER_RECIPIENT_EMAIL || "hello@estatepro.com",
      subject: "New Newsletter Subscription",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #c026d3; border-bottom: 2px solid #c026d3; padding-bottom: 10px;">
            New Newsletter Subscription
          </h2>
          <div style="margin-top: 20px; padding: 20px; background-color: #f9fafb; border-radius: 8px;">
            <p style="margin: 0; font-size: 16px;">
              <strong>Email:</strong> ${email}
            </p>
          </div>
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 12px;">
            This email was sent from EstatePro newsletter subscription form.
          </div>
        </div>
      `,
      text: `
New Newsletter Subscription
============================

Email: ${email}
      `,
    };

    const userMailOptions = {
      from: process.env.SMTP_FROM || "your-email@gmail.com",
      to: email,
      subject: "Welcome to EstatePro Newsletter!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #c026d3 0%, #a21caf 100%); padding: 40px; border-radius: 12px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 28px;">Welcome to EstatePro!</h1>
          </div>
          <div style="padding: 40px 20px;">
            <h2 style="color: #1f2937; margin-top: 0;">Thank you for subscribing!</h2>
            <p style="color: #4b5563; font-size: 16px; line-height: 1.6;">
              You've successfully subscribed to the EstatePro newsletter. We're thrilled to have you on board!
            </p>
            <p style="color: #4b5563; font-size: 16px; line-height: 1.6;">
              Get ready to receive:
            </p>
            <ul style="color: #4b5563; font-size: 16px; line-height: 2;">
              <li>✅ Exclusive real estate market updates</li>
              <li>✅ Handpicked property listings</li>
              <li>✅ Expert tips and investment insights</li>
              <li>✅ Special offers and announcements</li>
            </ul>
            <p style="color: #4b5563; font-size: 16px; line-height: 1.6; margin-top: 30px;">
              If you have any questions, feel free to reply to this email or contact us at 
              <a href="mailto:hello@estatepro.com" style="color: #c026d3;">hello@estatepro.com</a>.
            </p>
            <p style="color: #4b5563; font-size: 16px; line-height: 1.6;">
              Best regards,<br/>
              <strong>The EstatePro Team</strong>
            </p>
          </div>
          <div style="background-color: #f9fafb; padding: 20px; text-align: center; border-radius: 0 0 12px 12px;">
            <p style="color: #9ca3af; font-size: 12px; margin: 0;">
              © 2024 EstatePro. All rights reserved.
            </p>
          </div>
        </div>
      `,
      text: `
Welcome to EstatePro Newsletter!
=================================

Thank you for subscribing!

You've successfully subscribed to the EstatePro newsletter. We're thrilled to have you on board!

Get ready to receive:
✅ Exclusive real estate market updates
✅ Handpicked property listings
✅ Expert tips and investment insights
✅ Special offers and announcements

If you have any questions, feel free to reply to this email or contact us at hello@estatepro.com.

Best regards,
The EstatePro Team

© 2024 EstatePro. All rights reserved.
      `,
    };

    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(userMailOptions),
    ]);

    return Response.json({
      success: true,
      message:
        "Thank you for subscribing! Check your email for a welcome message.",
    });
  } catch (error) {
    console.error("Error sending newsletter email:", error);
    return Response.json(
      {
        success: false,
        message:
          "Something went wrong while subscribing. Please try again later.",
      },
      { status: 500 },
    );
  }
}
