import "./globals.css";

export const metadata = {
  title: "Tima Djeletyan",
  description: "Tima Djeletyan's portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' className='dark'>
      <body>{children}</body>
    </html>
  );
}
