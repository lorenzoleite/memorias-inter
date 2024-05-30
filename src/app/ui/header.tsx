import Image from 'next/image';
import Link from 'next/link';
import { FaInstagram } from 'react-icons/fa';

import { NavLinks } from '@/app/ui/nav-links';

export function Header() {
  return (
    <header className="bg-[#E66E25]">
      <div className="w-full max-w-xl mx-auto p-3 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="mr-4">
            <Image src="/memorias-inter.png" width={45} height={45} alt="" />
          </Link>
          <NavLinks />
        </div>
        <a
          href="https://www.instagram.com/memoriasinter/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-yellow-400"
        >
          <FaInstagram className="size-5" />
        </a>
      </div>
    </header>
  );
}
