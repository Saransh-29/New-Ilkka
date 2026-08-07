import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import ContactConfirmationEmail from '@/emails/ContactConfirmationEmail';
import AdminNotificationEmail from '@/emails/AdminNotificationEmail';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    // Default sender address in Resend (onboarding@resend.dev) or custom verified domain
    const fromAddress =
      process.env.RESEND_FROM_EMAIL || 'ILKKA Healthcare <onboarding@resend.dev>';

    // Check if using default testing domain (onboarding@resend.dev)
    const isTestingMode = !process.env.RESEND_FROM_EMAIL || fromAddress.includes('onboarding@resend.dev');

    // In testing mode without a verified domain, Resend requires 'to' address to be the account owner email
    const accountOwnerEmail = process.env.RESEND_ACCOUNT_EMAIL || 'saransh2905@gmail.com';
    const adminRecipient = isTestingMode ? accountOwnerEmail : 'info@ilkkahealthcare.com';
    const userRecipient = isTestingMode ? accountOwnerEmail : email;

    // 1. Send notification email to company / admin
    const adminRes = await resend.emails.send({
      from: fromAddress,
      to: [adminRecipient],
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      react: AdminNotificationEmail({ name, email, message }),
    });

    if (adminRes.error) {
      console.error('Resend Admin Email Error:', adminRes.error);
      return NextResponse.json(
        { error: adminRes.error.message || 'Resend failed to send admin email.' },
        { status: adminRes.error.statusCode || 400 }
      );
    }

    // 2. Send confirmation email to user
    const userRes = await resend.emails.send({
      from: fromAddress,
      to: [userRecipient],
      replyTo: 'info@ilkkahealthcare.com',
      subject: 'Thank you for contacting ILKKA Healthcare Private Limited',
      react: ContactConfirmationEmail({ name, email, message }),
    });

    if (userRes.error) {
      console.error('Resend User Email Error:', userRes.error);
      return NextResponse.json(
        { error: userRes.error.message || 'Resend failed to send confirmation email.' },
        { status: userRes.error.statusCode || 400 }
      );
    }

    return NextResponse.json({
      success: true,
      data: {
        adminEmailId: adminRes.data?.id,
        userEmailId: userRes.data?.id,
      },
    });
  } catch (error: any) {
    console.error('Contact API Error:', error);
    return NextResponse.json(
      { error: error?.message || 'Failed to send email' },
      { status: 500 }
    );
  }
}
