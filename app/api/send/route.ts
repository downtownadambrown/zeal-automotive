import type { NextRequest, NextResponse } from 'next/server';
import { EmailTemplate } from '../../components/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_KEY);

export interface EmailPayload {
    name: string;
    email: string;
    phone: string;
    make: string;
    model: string;
    mileage: string;
    info: string;
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { data, error } = await resend.emails.send({
    from: 'inquiry@zealautomotive.com',
    to: ['zealautoz@gmail.com'],
    subject: 'Website Inquiry',
    react: EmailTemplate(body),
    text: body,
  });

  if (error) {
    return new Response(error.message, { status: 500 });
  }

  return new Response('ok', { status: 200 });
}