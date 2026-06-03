import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI CV Referral & Candidate Shortlisting System",
  description: "An AI-powered recruitment assistant for job intake, resume parsing, candidate ranking, referrals, and automation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
