import '@/app/ui/globals.css';

import type { Metadata } from 'next';
import { Secular_One } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';

import { Header } from '@/app/ui/header';
import { Footer } from '@/app/ui/footer';

const secular = Secular_One({ weight: '400', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Memórias Inter',
  description:
    'Página criada por ex-atletas e fãs das histórias e retrospecto esportivo do maior evento esportivo de atléticas do Centro-Oeste.',
  icons: {
    icon: 'favicon.png'
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`flex flex-col min-h-screen ${secular.className} antialiased`}
      >
        <Header />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
