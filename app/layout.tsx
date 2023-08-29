import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import MainLayout from "@/components/layout/main-layout";

const font = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kripto Klub",
  description: "Kripto Klub Web Application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
