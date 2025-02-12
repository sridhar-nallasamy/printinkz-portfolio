'use client';

import { navbarContents } from '@/constants/navbar';
import Link from 'next/link';

import { Box, Drawer, IconButton, List, ListItem } from '@mui/material';
import { Bars3Icon, CloseIcon } from '@/assets/icons';
import CustomButton from '@/components/customButton';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDrawer = (toggleState: boolean) => () => {
    setIsMenuOpen(toggleState);
  };

  return (
    <>
      <nav
        id="navbar-desktop"
        className="hidden lg:flex w-[62%] h-full justify-around items-center font-semibold text-lg"
      >
        <NavbarContentItems />
      </nav>
      <nav
        id="navbar-mobile"
        className="w-[62%] flex lg:hidden flex-col items-end font-semibold text-lg pr-3"
      >
        <IconButton onClick={toggleDrawer(true)}>
          <Bars3Icon className="w-12 hover:text-[#00774D]" />
        </IconButton>
        <Drawer anchor="right" open={isMenuOpen} onClose={toggleDrawer(false)}>
          <IconButton
            className="flex justify-start w-16"
            onClick={toggleDrawer(false)}
          >
            <CloseIcon className="w-12 hover:text-[#00774D]" />
          </IconButton>
          <Box
            sx={{ width: 300 }}
            role="presentation"
            onClick={toggleDrawer(false)}
          >
            <List>
              <NavbarContentItems />
            </List>
          </Box>
        </Drawer>
      </nav>
    </>
  );
};

export default Navbar;

const NavbarContentItems = () => {
  return (
    <>
      {navbarContents.map((item, index) => (
        <ListItem key={index}>
          <Link
            href={item.url}
            onClick={() => {}}
            key={`navbar_${item.title}`}
            className={`inline-block text-xl hover:font-extrabold hover:text-[#00774D]`}
            //style={{ '--delay': i * 0.25 + 's' }}
          >
            {item.title}
          </Link>
        </ListItem>
      ))}
      <CustomButton
        type="button"
        title="Start Selling"
        className={`text-xl bg-[#00774D] hover:bg-[#00774dd0] hover:shadow-md hover:shadow-[#00774D] text-white`}
        //style={{ '--delay': '1s' }}
      />
    </>
  );
};
