import type { Metadata } from "next";
import { Noto_Sans_Thai } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Navbar } from "@/components/navbar";

const noto = Noto_Sans_Thai({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Keep It Simple",
  description: "developed by keepit's team",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={noto.className}>
      <body>
        <Providers>
          <Navbar />
          {/* outter container */}
          <div className="flex min-h-screen bg-blue-100 px-6 md:px-12 lg:px-20">
            {/* inner container */}
            <div className="flex flex-col my-20 flex-grow w-full">
              {children}
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
