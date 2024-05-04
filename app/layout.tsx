import type { Metadata, Viewport } from 'next';
import { Mulish } from 'next/font/google';

import type { FcChildProps } from '@/types/common';
import './globals.css';

const mulish = Mulish({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Printinkz',
  description: 'Printinkz portfolio website',
};

export const viewport: Viewport = { width: 'device-width', initialScale: 1 };

const RootLayout: React.FC<FcChildProps> = ({ children }) => {
  return (
    <html lang="en">
      <body className={mulish.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
