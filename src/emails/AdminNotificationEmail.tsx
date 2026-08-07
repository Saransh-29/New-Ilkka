import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from '@react-email/components';
import * as React from 'react';

interface AdminNotificationEmailProps {
  name: string;
  email: string;
  message: string;
}

export const AdminNotificationEmail = ({
  name,
  email,
  message,
}: AdminNotificationEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>New Website Contact Form Submission from {name}</Preview>
      <Body style={main}>
        <Container style={container}>
          {/* Header */}
          <Section style={header}>
            <Img
              src="https://www.ilkkahealthcare.com/ilkka-logo.png"
              alt="ILKKA Healthcare"
              width="150"
              height="auto"
              style={logo}
            />
            <Text style={headerSubtitle}>NEW WEBSITE ENQUIRY NOTIFICATION</Text>
          </Section>

          {/* Content */}
          <Section style={content}>
            <Heading style={title}>New Enquiry Received</Heading>
            <Text style={paragraph}>
              A new submission has been submitted through the <strong>ILKKA Healthcare</strong> website contact form.
            </Text>

            {/* Submission Card */}
            <Section style={card}>
              <Text style={cardHeader}>SENDER DETAILS</Text>
              <Hr style={cardDivider} />

              <Text style={metaRow}>
                <span style={metaLabel}>Full Name:</span> {name}
              </Text>
              <Text style={metaRow}>
                <span style={metaLabel}>Email Address:</span>{' '}
                <Link href={`mailto:${email}`} style={emailLink}>
                  {email}
                </Link>
              </Text>
              <Text style={metaRow}>
                <span style={metaLabel}>Message:</span>
              </Text>
              <Text style={messageContent}>{message}</Text>
            </Section>

            {/* Direct Reply Hint */}
            <Section style={tipBox}>
              <Text style={tipText}>
                💬 <strong>Quick Action:</strong> Click <strong>&ldquo;Reply&rdquo;</strong> in your email client to directly email {name} ({email}).
              </Text>
            </Section>
          </Section>

          {/* Footer */}
          <Section style={footer}>
            <Text style={footerText}>
              <strong>ILKKA Healthcare Website Notification Service</strong>
              <br />
              Recipient Inbox: info@ilkkahealthcare.com | Phone: +91 9901012211
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default AdminNotificationEmail;

/* ── Style Tokens (ILKKA Brand Palette) ── */
const main = {
  backgroundColor: '#faf8f3',
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
};

const container = {
  margin: '0 auto',
  padding: '36px 12px',
  maxWidth: '600px',
};

const header = {
  backgroundColor: '#152b1f',
  borderRadius: '16px 16px 0 0',
  padding: '32px',
  textAlign: 'center' as const,
};

const logo = {
  margin: '0 auto',
  display: 'block',
  maxWidth: '160px',
};

const headerSubtitle = {
  color: '#a8c8b6',
  fontSize: '10px',
  fontWeight: '600',
  letterSpacing: '2.5px',
  margin: '14px 0 0 0',
  textTransform: 'uppercase' as const,
};

const content = {
  backgroundColor: '#ffffff',
  padding: '36px 32px',
  borderLeft: '1px solid #e0ddd8',
  borderRight: '1px solid #e0ddd8',
  boxShadow: '0 4px 20px rgba(21,43,31,0.04)',
};

const title = {
  color: '#152b1f',
  fontSize: '22px',
  fontWeight: '600',
  margin: '0 0 12px 0',
  letterSpacing: '-0.02em',
};

const paragraph = {
  color: '#4a4740',
  fontSize: '15px',
  lineHeight: '1.6',
  margin: '0 0 20px 0',
};

const card = {
  backgroundColor: '#f4f2ed',
  borderRadius: '12px',
  padding: '24px',
  margin: '24px 0',
  border: '1px solid #e0ddd8',
};

const cardHeader = {
  color: '#152b1f',
  fontSize: '12px',
  fontWeight: '700',
  letterSpacing: '1.5px',
  margin: '0 0 8px 0',
  textTransform: 'uppercase' as const,
};

const cardDivider = {
  borderColor: '#a8c8b6',
  margin: '8px 0 16px 0',
  opacity: 0.5,
};

const metaRow = {
  color: '#2a2820',
  fontSize: '14px',
  lineHeight: '1.6',
  margin: '0 0 8px 0',
};

const metaLabel = {
  fontWeight: '600',
  color: '#152b1f',
};

const emailLink = {
  color: '#2d5a42',
  fontWeight: '600',
  textDecoration: 'underline',
};

const messageContent = {
  color: '#152b1f',
  fontSize: '14px',
  lineHeight: '1.65',
  backgroundColor: '#ffffff',
  padding: '14px 16px',
  borderRadius: '8px',
  border: '1px solid #a8c8b6',
  margin: '8px 0 0 0',
  whiteSpace: 'pre-wrap' as const,
};

const tipBox = {
  backgroundColor: '#eef6f1',
  borderRadius: '8px',
  padding: '14px 16px',
  border: '1px solid #a8c8b6',
  margin: '20px 0 0 0',
};

const tipText = {
  color: '#2d5a42',
  fontSize: '13px',
  lineHeight: '1.5',
  margin: '0',
};

const footer = {
  backgroundColor: '#152b1f',
  borderRadius: '0 0 16px 16px',
  padding: '24px 32px',
  textAlign: 'center' as const,
};

const footerText = {
  color: '#a8c8b6',
  fontSize: '12px',
  lineHeight: '1.6',
  margin: '0',
};
