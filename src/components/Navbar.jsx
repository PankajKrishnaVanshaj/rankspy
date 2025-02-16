import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-100 p-1 shadow-sm shadow-secondary rounded-full mx-2 my-1">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section with Image */}
        <Link href={"/"}>
          <div className="flex items-center">
            <Image
              src="/rankspy.png"
              alt="RankSpy Logo"
              width={100}
              height={100}
              className="w-12 h-12 sm:w-10 sm:h-10 md:w-12 md:h-12"
            />
            <span className="text-xl sm:text-2xl md:text-3xl font-bold bg-text-gradient bg-clip-text text-transparent">
              PK RankSpy
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
}
