'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  {
    name: 'home',
    path: '/',
  },
  {
    name: 'resume',
    path: '/resume',
  },
  {
    name: 'work',
    path: '/work',
  },
  {
    name: 'Testimonials',
    path: '/testimonials',
  },
  {
    name: 'mini game',
    path: '/game',
  },
];

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="flex space-x-8">
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`${
              link.path === pathname && 'text-accent'
            }  capitalize font-medium hover:text-accent transition-all hover:underline hover:underline-offset-4`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
