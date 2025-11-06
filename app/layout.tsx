import "./globals.css";
import { ReactNode } from "react";
import { Plus_Jakarta_Sans } from "next/font/google";

const plus = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-sans" });

export const metadata = {
  title: "Flokem-Excel Computer Institute & Business Centre",
  description: "Empowering Digital Skills & Education",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${plus.variable} font-sans antialiased`}>{children}</body>
    </html>
  );
}
