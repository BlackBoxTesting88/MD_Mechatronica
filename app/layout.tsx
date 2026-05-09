import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MD Mechatronica - Professional Printing Machine Service",
  description: "Expert installation, maintenance, and repair services for Müller Martini, Kolbus, and Hörauf printing machines. Professional machinery service across Europe.",
  keywords: "printing machine service, Müller Martini, Kolbus, Hörauf, machine installation, industrial maintenance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans">
        {children}
      </body>
    </html>
  );
}
