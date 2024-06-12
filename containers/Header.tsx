import Image from 'next/image';
import Link from 'next/link';
import PrintinkzLogo from '@/assets/svgs/printinkz.svg';
import Navbar from './navbar/Navbar';

const Header = () => {
  return (
    <header className="w-full sticky top-0 left-0 flex z-20 bg-white justify-between items-center">
      <div id="header-left" className="w-[38%] h-full ml-4 flex items-center">
        <Link href="/">
          <Image
            src={PrintinkzLogo}
            alt="PrintInkx Logo"
            height={30}
            width={30}
            className="inline"
          />
          <p className="my-4 ml-3 hidden sm:inline-block font-extrabold text-2xl">
            PrintInkz
          </p>
        </Link>
      </div>
      <Navbar />
    </header>
  );
};

export default Header;
