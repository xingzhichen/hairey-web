import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, subject, message' },
        { status: 400 }
      );
    }

    const RECIPIENT_EMAIL = 'scarlett.guo@hairey.net';
    const SMTP_HOST = 'smtp.gmail.com';
    const SMTP_PORT = 465;
    const SMTP_USER =  'xingzhichenshuai@gmail.com';
    const SMTP_PASS = 'tngg wmew xtdn ehmo';

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: true,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    const mailOptions = {
      from: SMTP_USER ? `"${name}" <${SMTP_USER}>` : `"${name}" <${email}>`,
      to: RECIPIENT_EMAIL,
      subject: `[Hairey Contact] ${subject}`,
      text: `
        Name: ${name}
        Email: ${email}
        
        Message:
        ${message}
      `,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #00a8e8, #0077b6); color: white; padding: 30px; border-radius: 8px; }
            .content { padding: 20px 0; }
            .label { font-weight: 600; color: #334155; }
            .message-box { background: #f8fafc; padding: 15px; border-radius: 8px; margin-top: 15px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0;">New Contact Form Submission</h1>
            </div>
            <div class="content">
              <p><span class="label">Name:</span> ${name}</p>
              <p><span class="label">Email:</span> ${email}</p>
              <div class="message-box">
                <p class="label">Message:</p>
                <p>${message.replace(/\n/g, '<br />')}</p>
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
      replyTo: email,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.messageId);

    return NextResponse.json(
      { 
        success: true, 
        message: 'Email sent successfully',
        messageId: info.messageId
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error in send-email API:', error);
    return NextResponse.json(
      { error: 'Failed to send email', details: String(error) },
      { status: 500 }
    );
  }
}
