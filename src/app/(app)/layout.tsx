import type { Metadata } from 'next';
import Navbar from '@/components/navbar';

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
    <>
      <Navbar />
      {/* outter container */}
      <div className="flex min-h-screen px-6 md:px-12 lg:px-20">
        {/* inner container */}
        <div className="flex flex-col my-20 flex-grow w-full">{children}</div>
      </div>
    </>
  );
}
