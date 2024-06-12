'use client';

import { useAppSelector } from '@/store/hooks';
import { navBarState } from '@/store/slices/navBarSlice';
import { FcChildProps } from '@/types/common';
import MobileNavbar from '../navbar/MobileNavbar';

const Main = ({ children }: FcChildProps) => {
  const isMenuOpen = useAppSelector(navBarState);
  return (
    <main className={`${isMenuOpen ? 'w-screen h-screen' : 'w-full h-full'}`}>
      {isMenuOpen ? <MobileNavbar /> : children}
    </main>
  );
};

export default Main;
