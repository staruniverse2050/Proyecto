import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from 'next/head';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tikitecno",
  description: "Tikitecno",
  icons:"https://vakano.studio/wp-content/uploads/2023/08/vs-3.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Head>
        {metadata.icons && <link rel="shortcut icon" href={metadata.icons} />}
      </Head>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </>
  );
}
