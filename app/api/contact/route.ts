import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

export async function POST(req: NextRequest) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: "Email service not configured." },
      { status: 500 }
    );
  }

  const resend = new Resend(apiKey);

  let body: { name: string; email: string; subject: string; message: string };

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const { name, email, subject, message } = body;

  if (!name || !email || !subject || !message) {
    return NextResponse.json(
      { error: "All fields are required." },
      { status: 400 }
    );
  }

  try {
    await resend.emails.send({
      from: "Wavekind Contact <contact@wavekind.com>",
      to: "hello@wavekind.com",
      replyTo: email,
      subject: `[Wavekind] ${subject} — from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\n${message}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; color: #1C1C1A;">
          <p style="font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; color: #9B9589; margin-bottom: 24px;">
            New message via wavekind.com
          </p>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
            <tr>
              <td style="padding: 8px 0; font-size: 12px; color: #9B9589; width: 80px;">Name</td>
              <td style="padding: 8px 0; font-size: 14px;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-size: 12px; color: #9B9589;">Email</td>
              <td style="padding: 8px 0; font-size: 14px;"><a href="mailto:${email}" style="color: #6d91a3;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-size: 12px; color: #9B9589;">Subject</td>
              <td style="padding: 8px 0; font-size: 14px;">${subject}</td>
            </tr>
          </table>
          <hr style="border: none; border-top: 1px solid #E5E1D8; margin-bottom: 24px;" />
          <p style="font-size: 14px; line-height: 1.7; white-space: pre-wrap;">${message}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Resend error:", err);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
