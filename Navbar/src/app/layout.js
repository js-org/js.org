import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Zuptrix - Innovative Web Solutions",
  description: "Zuptrix is a leading web development company based in Janakpur, Nepal. We specialize in creating modern, responsive websites and applications that help businesses thrive online. Our team of experts is dedicated to delivering high-quality digital solutions tailored to your unique needs. Whether you're looking to build a new website, develop a mobile app, or enhance your online presence with digital marketing, Zuptrix has you covered. Contact us today to learn how we can help your business succeed in the digital world.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
