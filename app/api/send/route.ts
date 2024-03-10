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

export async function POST(payload: EmailPayload) {
  try {
    const data = await resend.emails.send({
      from: 'inquiry@zealautomotive.com',
      to: ['downtownadambrown@gmail.com'], // ['zealautoz@gmail.com'],
      subject: 'Website Inquiry',
      react: EmailTemplate(payload),
      text: "text-test"
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}