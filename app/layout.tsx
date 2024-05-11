import type { Metadata } from 'next';
import { Mulish } from 'next/font/google';

import type { FcChildProps } from '@/types/common';
import './globals.css';

const mulish = Mulish({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Printinkz',
  description: 'Printinkz portfolio website',
  openGraph: {
    type: 'website',
    images:
      'https://storage.googleapis.com/multimedia.printinkz.com/printinkz.png',
  },
  twitter: {
    images:
      'https://storage.googleapis.com/multimedia.printinkz.com/printinkz.png',
  },
};

const RootLayout: React.FC<FcChildProps> = ({ children }) => {
  return (
    <html lang="en">
      <body className={mulish.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
