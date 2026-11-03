import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Web Developer & Digital Staff",
  description:
    "Portfolio Web Developer, Designer, dan Digital Staff dengan pengalaman administrasi.",
    icons: {
    icon: "/icon.png", // <-- (Opsional) Kalau kamu mau taruh logo di tab browser
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={jakarta.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}