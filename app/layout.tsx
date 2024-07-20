import type { Metadata } from 'next';
import { Mulish } from 'next/font/google';

import type { FcChildProps } from '@/types/common';
import Header from '@/containers/header';
import Footer from '@/containers/footer';
import StoreProvider from '@/store/StoreProvider';
import Main from '@/containers/main/main';
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
      <StoreProvider>
        <body className={mulish.className}>
          <Header />
          <Main>{children}</Main>
          <Footer />
        </body>
      </StoreProvider>
    </html>
  );
};

export default RootLayout;
