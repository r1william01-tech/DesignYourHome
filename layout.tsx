import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DesignYourHome — Design with confidence",
  description: "A trustworthy digital twin for making better home design decisions."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
