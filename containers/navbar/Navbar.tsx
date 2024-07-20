'use client';

import Link from 'next/link';
import { navbarContents } from '@/constants/constants';
import Button from '@/components/button';
import { IconButton } from '@mui/material';
import { ArrowLongRight, Bars3Icon, CloseIcon } from '@/assets/svgs/Icons';
import { toggleNavbarState, navBarState } from '@/store/slices/navBarSlice';
import { useAppDispatch, useAppSelector } from '@/store/hooks';

const Navbar = () => {
  const isMenuOpen = useAppSelector(navBarState);
  const dispatch = useAppDispatch();

  return (
    <>
      <nav
        id="navbar-desktop"
        className="hidden md:flex w-[62%] h-full justify-around items-center font-semibold text-lg"
      >
        {navbarContents.map((item) => (
          <Link
            href={item.url}
            key={`navbar_${item.title}`}
            className="inline-block hover:font-extrabold hover:text-[#00774D]"
          >
            {item.title}
          </Link>
        ))}
        <Button
          type="button"
          title="Start Selling"
          className="bg-[#00774D] hover:bg-[#00774dd0] hover:shadow-md hover:shadow-[#00774D] text-white"
          // Icon={ArrowLongRight}
        />
      </nav>
      <nav
        id="navbar-mobile"
        className="w-[62%] flex md:hidden flex-col items-end font-semibold text-lg pr-3"
      >
        <IconButton onClick={() => dispatch(toggleNavbarState())}>
          {isMenuOpen ? (
            <CloseIcon className="w-12 hover:text-[#00774D]" />
          ) : (
            <Bars3Icon className="w-12 hover:text-[#00774D]" />
          )}
        </IconButton>
      </nav>
    </>
  );
};

export default Navbar;
