import type { Metadata } from 'next';
import { Noto_Sans_Thai } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';

const noto = Noto_Sans_Thai({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: {
    default: 'Keep It  Simple',
    template: `%s | Keep`,
  },
  description: "Online Accounting Manager",
  icons: '/favicon.ico',
  keywords: ["เว็บทำบัญชี", "ทำบัญชีออนไลน์", "ออกเอกสารบัญชี", "Keep", "Keepit", "keep it simple"],
  creator: 'A12 Soft-Dev 1/2024',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={noto.className}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
