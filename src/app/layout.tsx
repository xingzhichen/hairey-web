import type { Metadata } from "next";
import { Header } from "@/components/header/Header";
import { Footer } from "@/components/footer/Footer";
import { StructuredData } from "@/components/StructuredData";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://www.hairey.net'),
  title: {
    default: "Hairey Dental | Precision Dental Digital Solutions",
    template: "%s | Hairey Dental",
  },
  description: "Hairey - Next-Gen Dental Biotechnology. Delivering high-performance digital restoration solutions to clinics worldwide through advanced materials and precision engineering.",
  keywords: ["Hairey", "dental biotechnology", "digital restoration", "precision dentistry", "dental materials", "digital workflow", "biomaterials"],
  icons: {
    icon: '/images/logo.png',
    shortcut: '/images/logo.png',
    apple: '/images/logo.png',
  },
  authors: [{ name: "Hairey Dental Technology Co., Ltd." }],
  creator: "Hairey Dental",
  publisher: "Hairey Dental",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.hairey.net',
    siteName: 'Hairey Dental',
    title: 'Hairey Dental | Precision Dental Digital Solutions',
    description: 'Hairey - Next-Gen Dental Biotechnology. Delivering high-performance digital restoration solutions to clinics worldwide.',
    images: [
      {
        url: 'https://www.hairey.net/images/new-banner.png',
        width: 1200,
        height: 630,
        alt: 'Hairey Dental Biotechnology',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hairey Dental | Precision Dental Digital Solutions',
    description: 'Hairey - Next-Gen Dental Biotechnology.',
    images: ['https://www.hairey.net/images/new-banner.png'],
  }
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
        <main itemScope itemType="https://schema.org/WebPage">
          {children}
        </main>
        <Footer />
        <StructuredData />
      </body>
    </html>
  );
}
