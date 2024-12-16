import "./globals.css";
import Header from "@/components/Header";
import { GeistSans } from "geist/font/sans";
import dynamic from "next/dynamic";

const Footer = dynamic(() => import("@/components/Footer"), {
  loading: () => <div></div>,
  ssr: true,
});

export const metadata = {
  title: "Tima Djeletyan",
  description: "Tima Djeletyan's portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' className={`${GeistSans.className} dark`}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
