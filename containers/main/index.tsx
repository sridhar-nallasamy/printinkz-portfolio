'use client';

import { useAppSelector } from '@/store/hooks';
import { navBarState } from '@/store/slices/navBarSlice';
import { FcChildrenProps } from '@/types/common';
import MobileNavbar from '../navbar/mobileNavbar';

const Main = ({ children }: FcChildrenProps) => {
  const isMenuOpen = useAppSelector(navBarState);
  return (
    <main className={`${isMenuOpen ? 'w-screen h-screen' : 'w-full h-full'}`}>
      {isMenuOpen ? <MobileNavbar /> : children}
    </main>
  );
};

export default Main;
