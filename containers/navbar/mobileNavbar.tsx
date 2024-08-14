import Link from 'next/link';

import { toggleNavbarState, navBarState } from '@/store/slices/navBarSlice';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { navbarContents } from '@/constants/navbar';
import CustomButton from '@/components/customButton';

//This will be displayed as a whole page

const MobileNavbar = () => {
  const isMenuOpen = useAppSelector(navBarState);
  const dispatch = useAppDispatch();
  return (
    <div
      className={`w-full h-full md:hidden transition-all duration-300 ${
        isMenuOpen ? 'max-h-full opacity-100 py-2 ' : 'max-h-0 opacity-0'
      } flex flex-col justify-evenly items-center`}
    >
      {navbarContents.map((item) => (
        <Link
          href={item.url}
          onClick={() => dispatch(toggleNavbarState())}
          key={`navbar_${item.title}`}
          className={`inline-block text-xl hover:font-extrabold hover:text-[#00774D]`}
          //style={{ '--delay': i * 0.25 + 's' }}
        >
          {item.title}
        </Link>
      ))}
      {/* <Link
        href={process.env.NEXT_PUBLIC_DASHBOARD_LINK as string}
        target="_blank"
      > */}
      <CustomButton
        type="button"
        title="Start Selling"
        className={`text-xl bg-[#00774D] hover:bg-[#00774dd0] hover:shadow-md hover:shadow-[#00774D] text-white`}
        //style={{ '--delay': '1s' }}
      />
      {/* </Link> */}
    </div>
  );
};

export default MobileNavbar;
