
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from 'next/head';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tikitecno",
  description: "Tikitecno",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Head>
        {/* Componente Head para configurar el icono del sitio */}
        <link rel="icon" href="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/512px-LEGO_logo.svg.png" />
      </Head>
      <html lang="en">
        {/* Renderiza el componente principal y los props de la página */}
        <body className={inter.className}>{children}</body>
      </html>
    </>
  );
}
