import { NextResponse } from 'next/server';
import { contactFormSchema } from '@/lib/validation';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // 1. Zod Server-side Validation
    const parseResult = contactFormSchema.safeParse(body);
    if (!parseResult.success) {
      return NextResponse.json(
        {
          success: false,
          error: 'Validation failed',
          issues: parseResult.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const { name, email, subject, message, honeypot } = parseResult.data;

    // 2. Anti-Spam Honeypot Verification
    if (honeypot && honeypot.length > 0) {
      // Silently reject spam bots without exposing detection logic
      return NextResponse.json(
        { success: true, message: 'Message received successfully.' },
        { status: 200 }
      );
    }

    // 3. Optional Resend Integration or Secure Server Logging
    const resendApiKey = process.env.RESEND_API_KEY;
    if (resendApiKey) {
      try {
        const res = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${resendApiKey}`,
          },
          body: JSON.stringify({
            from: 'Portfolio Contact <onboarding@resend.dev>',
            to: ['divyadarsiniu@gmail.com'],
            subject: `[Portfolio Inquiry] ${subject} - from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
          }),
        });

        if (!res.ok) {
          console.warn('[API/Contact] Resend API responded with error status:', res.status);
        }
      } catch (emailErr) {
        console.error('[API/Contact] Failed to send email via Resend:', emailErr);
      }
    } else {
      // In development / demo environment without Resend key, log securely on server
      console.log(`[Contact Form Received] From: ${name} <${email}> | Subject: ${subject}`);
    }

    // Generate safe mailto fallback link in response payload
    const mailtoFallback = `mailto:divyadarsiniu@gmail.com?subject=${encodeURIComponent(
      `[Portfolio] ${subject}`
    )}&body=${encodeURIComponent(`Hi Divya,\n\n${message}\n\nFrom: ${name} (${email})`)}`;

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you! Your message has been recorded.',
        mailtoFallback,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('[API/Contact] Unexpected error:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'An unexpected internal error occurred. Please use direct email.',
      },
      { status: 500 }
    );
  }
}
