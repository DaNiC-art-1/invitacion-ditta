import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Invitación Ditta",
  description: "Invitación digital para celebrar a Ditta.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
