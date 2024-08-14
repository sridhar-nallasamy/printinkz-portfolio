import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] w-full flex items-center justify-center">
      <div className="text-center">
        <h2 className="mb-4">
          Page Not Found! <span role="img">🙁</span>
        </h2>
        <Link
          href="/"
          className="bg-[#00774D] text-white px-2 py-1 cursor-pointer border rounded-md"
        >
          Return to home
        </Link>
      </div>
    </div>
  );
}
