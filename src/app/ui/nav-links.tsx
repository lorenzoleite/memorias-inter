'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { name: 'Início', href: '/' },
  {
    name: 'Classificações',
    href: '/standings'
  },
  { name: 'Fundações', href: '/foundation' },
  {
    name: "CO's",
    href: '/committees'
  }
];

export function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map(link => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'mr-2 text-xs md:text-sm text-white hover:text-yellow-400',
              {
                'text-yellow-400': pathname === link.href
              }
            )}
          >
            <p>{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
