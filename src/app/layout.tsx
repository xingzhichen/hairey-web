import type { Metadata } from "next";
import { Header } from "@/components/header/Header";
import { Footer } from "@/components/footer/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hairey Dental | Precision Dentistry",
  description: "Next-Gen Dental Biotechnology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
