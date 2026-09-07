'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navLinks } from '@/lib/content';

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="flex space-x-8">
      {navLinks.map((link) => (
        <Link
          href={link.path}
          key={link.path}
          className={`${
            link.path === pathname ? 'text-accent' : 'text-cream/80'
          } font-medium capitalize transition-colors hover:text-accent`}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
