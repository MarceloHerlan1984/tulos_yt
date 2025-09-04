import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

export const metadata: Metadata = {
  title: "Tango School in Helsinki | Amor del Tango",
  description:
    "Argentine tango lessons in Helsinki. From beginners to advanced levels with professional teachers. Milongas, practicas, and special workshops.",
  keywords: [
    "tango Helsinki",
    "tango lessons",
    "tango school",
    "milonga",
    "Argentine tango Finland",
    "Helsinki tango",
    "Amor del Tango",
  ],
  authors: [{ name: "Amor del Tango - Tango School in Helsinki" }],
  openGraph: {
    title: "Amor del Tango | Tango School in Helsinki",
    description:
      "Discover Argentine tango in Helsinki. Classes, practicas, and milongas for all levels.",
    url: "https://yourdomain.com",
    siteName: "Amor del Tango",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://yourdomain.com/og-image.jpg", // replace with your actual image
        width: 1200,
        height: 630,
        alt: "Amor del Tango in Helsinki",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Amor del Tango | Tango School in Helsinki",
    description:
      "Argentine tango lessons in Helsinki. Classes for all levels, plus practicas and milongas.",
    images: ["https://yourdomain.com/og-image.jpg"],
    creator: "@your_twitter_handle", // optional
  },
  metadataBase: new URL("https://yourdomain.com"),
  alternates: {
    canonical: "https://yourdomain.com",
    languages: {
      "en-US": "https://yourdomain.com/en",
      "es-ES": "https://yourdomain.com/es",
      "fi-FI": "https://yourdomain.com/fi",
    },
  },
};

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.variable}  antialiased`}>
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
