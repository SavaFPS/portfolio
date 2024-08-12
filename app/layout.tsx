import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

// components
import Header from '@/components/Header';
import PageTransition from './PageTransition';

const PoppinsFont = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  variable: '--font-PoppinsFont',
});

export const metadata: Metadata = {
  title: 'Sava Portfolio',
  description: 'Portfolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={PoppinsFont.variable}>
        <Header />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
