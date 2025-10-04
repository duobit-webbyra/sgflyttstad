import React from 'react';
import { LivePreviewListener } from '@/app/utils/live-preview-listener';
import { Poppins } from 'next/font/google';
import '@/app/styles/globals.css';
import Header from '@/app/components/essentials/Header';
import Footer from '@/app/components/essentials/Footer';
import InfoHeader from '../components/essentials/InfoHeader';

export const metadata = {
  title: 'SG Flytt & Städ Mälardalen – Professionell Flyttfirma & Städservice',
  description:
    'SG Flytt & Städ erbjuder professionella flytt- och städtjänster för både privatpersoner och företag i hela Sverige. Vi hanterar allt från packning och transport till flyttstädning.',
};

const poppins = Poppins({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head>
        <meta
          name='google-site-verification'
          content='QENPmGZEhYpVthxnzDAis9CkFy3WuMeWAk21z75TuM4'
        />
      </head>
      <body
        className={`${poppins.className} flex min-h-screen flex-col antialiased`}
      >
        <LivePreviewListener />
        <InfoHeader />
        <Header />
        <main className='flex flex-1 flex-col'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
