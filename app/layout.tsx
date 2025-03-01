import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/grid";

import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

import { ModalProvider } from "@/hooks/use-modals";
import { AccountModal } from "@/components/modals/account-modal";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});
export const metadata: Metadata = {
  title: "Facility",
  description: "Facility - Shop Smarter, Faster",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} antialiased max-w-screen-2xl mx-auto`}
      >
        <ModalProvider>
          <Header />
          <main className="min-h-screen bg-background">{children}</main>
          <Footer />
          <AccountModal />
        </ModalProvider>
      </body>
    </html>
  );
}
