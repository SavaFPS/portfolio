'use client';

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet';
import Link from 'next/link';
import { CiMenuFries } from 'react-icons/ci';
import { useState } from 'react';
import { Button } from './ui/button';
import { usePathname } from 'next/navigation';
import { navLinks } from '@/lib/content';

const MobileNav = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const closeSheet = () => {
    setIsOpen(false);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger className="flex items-center justify-center" aria-label="Open menu">
        <CiMenuFries className="text-3xl transition-colors duration-300 hover:text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <SheetTitle className="hidden">Menu</SheetTitle>
        <SheetDescription className="hidden">
          This is the mobile navigation. You can select a link to navigate.
        </SheetDescription>
        <nav className="mt-16 flex flex-col items-center justify-center space-y-6">
          {navLinks.map((link) => (
            <Link
              onClick={closeSheet}
              href={link.path}
              key={link.path}
              className={`${
                link.path === pathname ? 'text-accent' : ''
              } text-2xl font-medium capitalize transition-colors hover:text-accent`}
            >
              {link.name}
            </Link>
          ))}
          <Button asChild size="lg">
            <Link onClick={closeSheet} href="/contact">
              Contact
            </Link>
          </Button>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
