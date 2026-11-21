import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tarequl Islam | Full Stack Developer",
  description: "Portfolio of Tarequl Islam — aspiring full stack developer from Bangladesh.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
