import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Container from "../components/Container";

const vazirMatn = Vazirmatn({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "پستش کن تو پستچی",
  description: "PostChi Created by Next",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa-IR" dir="rtl">
      <body className={`${vazirMatn.className} bg-zinc-100 text-zinc-900`}>
        <Container>
          <Header />
          {children}
          <Footer />
        </Container>
      </body>
    </html>
  );
}
