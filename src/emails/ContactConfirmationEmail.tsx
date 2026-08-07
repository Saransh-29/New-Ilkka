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

interface ContactConfirmationEmailProps {
  name: string;
  email: string;
  message: string;
}

export const ContactConfirmationEmail = ({
  name,
  email,
  message,
}: ContactConfirmationEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>Thank you for reaching out to ILKKA Healthcare Private Limited</Preview>
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
            <Text style={headerSubtitle}>INNOVATING FOR A HEALTHIER TOMORROW</Text>
          </Section>

          {/* Main Body */}
          <Section style={content}>
            <Heading style={greeting}>Dear {name},</Heading>
            <Text style={paragraph}>
              Thank you for contacting <strong>ILKKA Healthcare Private Limited</strong>.
              We have received your enquiry and our team will get back to you shortly.
            </Text>

            {/* Message Details Card */}
            <Section style={card}>
              <Text style={cardHeader}>YOUR ENQUIRY DETAILS</Text>
              <Hr style={cardDivider} />
              
              <Text style={metaRow}>
                <span style={metaLabel}>Name:</span> {name}
              </Text>
              <Text style={metaRow}>
                <span style={metaLabel}>Email:</span> {email}
              </Text>
              <Text style={metaRow}>
                <span style={metaLabel}>Message Submitted:</span>
              </Text>
              <Text style={messageContent}>{message}</Text>
            </Section>

            <Text style={paragraph}>
              If you require immediate assistance, please feel free to reach out directly to our team at{' '}
              <Link href="tel:+919901012211" style={phoneLink}>
                <strong>+91 9901012211</strong>
              </Link>{' '}
              or reply to this email.
            </Text>

            <Hr style={divider} />

            <Text style={signature}>
              Warm regards,
              <br />
              <strong style={{ color: '#152b1f' }}>ILKKA Healthcare Team</strong>
              <br />
              <span style={{ fontSize: '13px', color: '#6a6660' }}>
                Gynaecology & Infertility Specialities
              </span>
            </Text>
          </Section>

          {/* Footer */}
          <Section style={footer}>
            <Text style={footerAddress}>
              <strong>ILKKA Healthcare Private Limited</strong>
              <br />
              Jashoda Complex, Survey No. 130/2, Near McDonald&apos;s, Country Club,
              <br />
              Sathnur Village, Baglur Main Road, Bangalore — 562149, Karnataka, India
              <br />
              Phone: +91 9901012211 | Email: info@ilkkahealthcare.com
            </Text>
            <Text style={footerCopy}>
              © 2026 ILKKA Healthcare Private Limited. All rights reserved.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default ContactConfirmationEmail;

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
  padding: '36px 32px',
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
  padding: '40px 36px',
  borderLeft: '1px solid #e0ddd8',
  borderRight: '1px solid #e0ddd8',
  boxShadow: '0 4px 20px rgba(21,43,31,0.04)',
};

const greeting = {
  color: '#152b1f',
  fontSize: '22px',
  fontWeight: '600',
  margin: '0 0 16px 0',
  letterSpacing: '-0.02em',
};

const paragraph = {
  color: '#4a4740',
  fontSize: '15px',
  lineHeight: '1.65',
  margin: '0 0 20px 0',
};

const phoneLink = {
  color: '#152b1f',
  textDecoration: 'underline',
};

const card = {
  backgroundColor: '#f4f2ed',
  borderRadius: '12px',
  padding: '24px',
  margin: '28px 0',
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

const divider = {
  borderColor: '#f0ede8',
  margin: '28px 0',
};

const signature = {
  color: '#4a4740',
  fontSize: '15px',
  lineHeight: '1.6',
  margin: '0',
};

const footer = {
  backgroundColor: '#152b1f',
  borderRadius: '0 0 16px 16px',
  padding: '28px 32px',
  textAlign: 'center' as const,
};

const footerAddress = {
  color: '#a8c8b6',
  fontSize: '12px',
  lineHeight: '1.65',
  margin: '0 0 12px 0',
};

const footerCopy = {
  color: '#6f9a84',
  fontSize: '11px',
  margin: '0',
};
