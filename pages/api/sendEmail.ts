// pages/api/sendEmail.ts

import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function sendEmail(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { firstName, lastName, email, phone, message } = req.body;

    console.log('i am here', req.body);
    // Customize the email message
    const emailMessage = `
      <div style="font-family: Arial, sans-serif; line-height: 1.5;">
        <p>New Message from Your Portfolio</p>
        <p>You have received a new message from ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <hr style="border: 1px solid #ccc; margin: 20px 0;">
        <p>Message:</p>
        <p style="padding: 10px;">${message}</p>
      </div>
    `;

    // Set up the transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST, // Use your SMTP host
      port: Number(process.env.SMTP_PORT), // Use your SMTP port
      secure: process.env.SMTP_SECURE === 'true', // Use SSL
      auth: {
        user: process.env.SMTP_USER, // Your email
        pass: process.env.SMTP_PASSWORD, // Your email password
      },
    });

    try {
      // Send mail
      await transporter.sendMail({
        from: process.env.SMTP_USER, // Sender address
        to: process.env.SMTP_USER, // Recipient address (your email)
        subject: 'New Contact Form Submission', // Subject line
        html: emailMessage, // HTML body with the customized message
      });

      res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
      console.log('Error sending email:', error);
      res.status(500).json({ message: 'Failed to send email.' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ message: 'Method not allowed' });
  }
}
