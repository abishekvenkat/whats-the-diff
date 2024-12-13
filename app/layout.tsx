import './globals.css';
import type { Metadata } from 'next';
import { Karla } from 'next/font/google';
import Head from 'next/head';

const karla = Karla({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "What's the diff?",
  description: 'A real-time text difference comparison tool',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={karla.className}>{children}</body>
    </html>
  );
}