import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./_component/Navbar/page";
import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css";
import { Source_Serif_4, Azeret_Mono } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import MySessionProvider from "./_component/MySessionProvider/MySessionProvider";
import { CartContextProvider } from "./Context/cartContext";
import Footer from "./_component/Footer/page";

const sourceSerif4 = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif",
  display: "swap",
  // Optional: specify weights you'll use
  weight: ["300", "400", "600", "700", "900"],
});
const sourceSerifItalic = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif-italic",
  weight: "700",
  style: "italic",
  display: "swap",
  // Optional: if you need other weights too
});

// Configure Azeret Mono (monospace font)
const azeretMono = Azeret_Mono({
  subsets: ["latin"],
  variable: "--font-azeret-mono",
  display: "swap",
  // Optional: specify weights
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "ZÉID",
  description: "Premium shopping experience",
  icons:{
    icon:'/shopping-bag.ico'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sourceSerif4.variable} ${azeretMono.variable} ${sourceSerifItalic.variable} antialiased`}
      >
        <MySessionProvider>
          <CartContextProvider>
            <Navbar />
             {children}
            <Footer />
          </CartContextProvider>

          <Toaster />
        </MySessionProvider>
      </body>
    </html>
  );
}
