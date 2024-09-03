import type { NextRequest } from 'next/server';
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
    text: `
      Inquiry from ZealAutomotive.com - Contact Form\n\n
      Name: ${body.name}\n
      Email: ${body.email}\n
      Phone: ${body.phone}\n
      Make: ${body.make}\n
      Model: ${body.model}\n
      Mileage: ${body.mileage}\n
      Info: ${body.info}
    `,
  });

  if (error) {
    return new Response(error.message, { status: 500 });
  }

  return new Response('ok', { status: 200 });
}