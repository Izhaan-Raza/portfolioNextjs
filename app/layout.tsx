import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script'; // ✅ import this

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Izhaan Raza | IoT developer',
  description: '',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* ✅ Google Analytics Script */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-581CY7R5R5"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-581CY7R5R5');
          `}
        </Script>
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
