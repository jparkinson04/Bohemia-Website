import type { Metadata } from 'next';
import { Italiana, Cormorant_Garamond } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ChatBot from '@/components/ChatBot';
import './globals.css';

const italiana = Italiana({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-italiana',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  weight: ['300', '400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-cormorant',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Bohemia, Sound Healing & Wellness by Claire Whitfield',
  description:
    'Bohemia, a soulful sanctuary of sound healing, wellness retreats and holistic care, founded by Claire Whitfield. Step into Bohemia.',
  metadataBase: new URL('https://bohemia-wellness.co.uk'),
  openGraph: {
    title: 'Bohemia, Sound Healing & Wellness by Claire Whitfield',
    description:
      'A soulful sanctuary of sound healing, wellness retreats and holistic care.',
    images: ['/images/hero.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${italiana.variable} ${cormorant.variable}`}>
      <body>
        <Header />
        {children}
        <Footer />
        <ChatBot />
      </body>
    </html>
  );
}
