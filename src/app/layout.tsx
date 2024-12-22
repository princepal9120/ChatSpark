import type { Metadata } from "next";
import {  Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ChatSpark",
  description: "Automate your customer service with ChatSpark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
       <html lang="en">
      <body className={jakarta.className}>{children}</body>
    </html>
    </ClerkProvider>
  );
}
