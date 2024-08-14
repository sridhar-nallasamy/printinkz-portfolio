import Image from 'next/image';
import Link from 'next/link';
import PrintinkzLogo from '@/assets/svgs/printinkz.svg';
import Navbar from './navbar';

const Header = () => {
  return (
    <header className="w-full h-[10vh] sticky top-0 left-0 z-20 flex justify-between items-center bg-white">
      <div id="header-left" className="w-[38%] h-full ml-4 flex items-center">
        <Link href="/" className="flex items-center">
          <Image
            src={PrintinkzLogo}
            alt="PrintInkx Logo"
            height={40}
            width={40}
            className="inline"
          />
          <p className="my-4 ml-3 hidden sm:inline-block font-extrabold text-3xl">
            PrintInkz
          </p>
        </Link>
      </div>
      <Navbar />
    </header>
  );
};

export default Header;
