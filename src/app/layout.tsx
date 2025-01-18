import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import './globals.css';

//config font
const openSans = Open_Sans({
  variable: '--font-open-sans',
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
});

// SEO of site
export const metadata: Metadata = {
  title: 'Workout Calendar',
  description: 'Let’s do it every day to get stronger.',
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={openSans.className}>{children}</body>
    </html>
  );
}
