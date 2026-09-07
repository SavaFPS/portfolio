import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import {
  getContactSendErrorMessage,
  readContactPayload,
  validateContact,
} from '@/lib/contact';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

function escapeHtml(value: unknown) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function isSmtpSecure(value: string | undefined, port: number) {
  const normalized = value?.trim().toLowerCase();

  if (normalized === 'true' || normalized === '1' || normalized === 'yes') {
    return true;
  }

  if (normalized === 'false' || normalized === '0' || normalized === 'no') {
    return false;
  }

  return port === 465;
}

function getSmtpConfig() {
  const host = process.env.SMTP_HOST?.trim();
  const port = Number(process.env.SMTP_PORT);
  const user = process.env.SMTP_USER?.trim();
  const pass = process.env.SMTP_PASSWORD?.replace(/\s+/g, '');
  const secure = isSmtpSecure(process.env.SMTP_SECURE, port);

  if (!host || !Number.isFinite(port) || port <= 0 || !user || !pass) {
    return null;
  }

  return { host, port, user, pass, secure };
}

export async function POST(request: NextRequest) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { message: 'Invalid request. Please try again.' },
      { status: 400 }
    );
  }

  const values = readContactPayload(body);
  const errors = validateContact(values);

  if (Object.keys(errors).length > 0) {
    return NextResponse.json(
      {
        message: 'Please fix the highlighted fields.',
        errors,
      },
      { status: 400 }
    );
  }

  const smtp = getSmtpConfig();
  if (!smtp) {
    console.error('SMTP environment variables are missing.');
    return NextResponse.json(
      {
        message:
          "The message couldn't be sent. Please email me directly instead.",
      },
      { status: 500 }
    );
  }

  const emailMessage = `
    <div style="font-family: Arial, sans-serif; line-height: 1.5;">
      <p>New Message from Your Portfolio</p>
      <p>You have received a new message from ${escapeHtml(values.firstName)} ${escapeHtml(values.lastName)}</p>
      <p><strong>Email:</strong> ${escapeHtml(values.email)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(values.phone)}</p>
      <hr style="border: 1px solid #ccc; margin: 20px 0;">
      <p>Message:</p>
      <p style="padding: 10px;">${escapeHtml(values.message)}</p>
    </div>
  `;

  const transporter = nodemailer.createTransport({
    host: smtp.host,
    port: smtp.port,
    secure: smtp.secure,
    auth: {
      user: smtp.user,
      pass: smtp.pass,
    },
    connectionTimeout: 10_000,
    greetingTimeout: 10_000,
    socketTimeout: 10_000,
  });

  try {
    await transporter.sendMail({
      from: smtp.user,
      to: smtp.user,
      replyTo: values.email,
      subject: `Portfolio message from ${values.firstName} ${values.lastName}`,
      text: [
        `New message from ${values.firstName} ${values.lastName}`,
        `Email: ${values.email}`,
        `Phone: ${values.phone}`,
        '',
        values.message,
      ].join('\n'),
      html: emailMessage,
    });

    return NextResponse.json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { message: getContactSendErrorMessage(error) },
      { status: 500 }
    );
  }
}
