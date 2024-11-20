import "./globals.css";
import Header from "@/components/Header";
import { GeistSans } from "geist/font/sans";

export const metadata = {
  title: "Tima Djeletyan",
  description: "Tima Djeletyan's portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' className={`${GeistSans.className} dark`}>
      <body className='p-4 '>
        <Header />
        {children}
      </body>
    </html>
  );
}
