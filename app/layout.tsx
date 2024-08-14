import type { Metadata } from 'next';
import { Mulish } from 'next/font/google';
import type { FcChildrenProps } from '@/types/common';
import Header from '@/containers/header';
import Main from '@/containers/main';
import StoreProvider from '@/store/StoreProvider';
import CThemeProvider from '@/containers/theme';
import { CssBaseline } from '@mui/material';
import Footer from '@/containers/footer';
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

const RootLayout: React.FC<FcChildrenProps> = ({ children }) => {
  return (
    <html lang="en">
      <StoreProvider>
        <CThemeProvider>
          <CssBaseline />
          <body className={mulish.className}>
            <Header />
            <Main>{children}</Main>
            <Footer />
          </body>
        </CThemeProvider>
      </StoreProvider>
    </html>
  );
};

export default RootLayout;
