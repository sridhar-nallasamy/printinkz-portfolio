import Link from 'next/link';
import { NavBarContents } from '@/constants/constants';
import Button from '@/components/Button';
import { toggleNavbarState, navBarState } from '@/store/slices/navBarSlice';
import { useAppDispatch, useAppSelector } from '@/store/hooks';

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
      {NavBarContents.map((item, i) => (
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
      <Button
        type="button"
        title="Start Selling"
        className={`text-xl bg-[#00774D] hover:bg-[#00774dd0] hover:shadow-md hover:shadow-[#00774D] text-white`}
        //style={{ '--delay': '1s' }}
      />
    </div>
  );
};

export default MobileNavbar;
