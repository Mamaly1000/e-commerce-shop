import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Footer from "@/containers/Footer";
import Navbar from "@/containers/Navbar";
import Container from "@/containers/Container";
import ToastProvider from "@/providers/ToastProvider";
import ModalProviders from "@/providers/ModalProviders";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { SlideTabsExample } from "@/components/ui/Tab";

const font = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ShopSpot Store",
  description: "wellcome to ShopSpot, your shop spot",
  icons: {
    icon: "./favicon.ico",
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SlideTabsExample />
          <Navbar />
          <Container>{children}</Container>
          <Footer />
          <ToastProvider />
          <ModalProviders />
        </ThemeProvider>
      </body>
    </html>
  );
}
