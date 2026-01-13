import type { Metadata, Viewport } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  title: {
    default: "TCM Logistic",
    template: "%s | TCM Logistic",
  },
  description:
    "TCM Logistic is a logistics management platform providing efficient shipping, tracking, and supply chain solutions.",
  keywords: [
    "logistics",
    "shipping",
    "supply chain",
    "freight",
    "transportation",
    "delivery",
    "TCM Logistic",
  ],
  authors: [{ name: "TCM Logistic" }],
  creator: "TCM Logistic",
  publisher: "TCM Logistic",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "TCM Logistic",
    title: "TCM Logistic",
    description:
      "TCM Logistic is a logistics management platform providing efficient shipping, tracking, and supply chain solutions.",
    // url: "https://your-domain.com",
    // images: [
    //   {
    //     url: "/og-image.png",
    //     width: 1200,
    //     height: 630,
    //     alt: "TCM Logistic",
    //   },
    // ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TCM Logistic",
    description:
      "TCM Logistic is a logistics management platform providing efficient shipping, tracking, and supply chain solutions.",
    // images: ["/og-image.png"],
    // creator: "@tcmlogistic",
  },
  // icons: {
  //   icon: "/favicon.ico",
  //   shortcut: "/favicon-16x16.png",
  //   apple: "/apple-touch-icon.png",
  // },
  metadataBase: new URL("https://example.com"), // Replace with your actual domain
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} font-sans antialiased bg-white text-gray-900 min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
