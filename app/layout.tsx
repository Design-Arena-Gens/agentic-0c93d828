import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Talent Finder - Top AI Engineers & Researchers",
  description: "Discover emerging AI engineers and researchers on LinkedIn",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-gray-50">
        {children}
      </body>
    </html>
  );
}
