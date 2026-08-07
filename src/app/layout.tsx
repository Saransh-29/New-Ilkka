import type { Metadata } from 'next';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Cursor from '../components/ui/Cursor';
import '../styles/globals.css';

export const metadata: Metadata = {
  title: 'ILKKA Healthcare Private Limited | Quality & Innovation',
  description:
    'A progressive pharmaceutical company providing high-quality, affordable healthcare solutions in Gynaecology and Infertility across India.',
  keywords: ['ILKKA Healthcare', 'Pharmaceuticals', 'Gynaecology', 'Infertility', 'Healthcare India'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Cursor />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
