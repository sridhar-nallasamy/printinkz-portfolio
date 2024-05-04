import Image from 'next/image';
import PrintinkzLogo from '../assets/svgs/printinkz.svg';

export default function Home() {
  return (
    <main className="h-screen w-screen bg-black text-white grid place-content-center">
      <Image
        className="h-48 w-fit animate-bounce"
        src={PrintinkzLogo}
        alt="Printinkz Logo"
        priority
      />
    </main>
  );
}
