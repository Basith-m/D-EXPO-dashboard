import { Inter } from 'next/font/google';
import '@/styles/variables.css';
import "./globals.css";

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata = {
  title: 'D-EXPO Properties | Promoter Dashboard',
  description:
    'Manage your real estate leads, customers, commissions, hierarchy, and wallet payouts.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}