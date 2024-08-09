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
    name: 'services',
    path: '/services',
  },
  {
    name: 'work',
    path: '/work',
  },
  {
    name: 'mini game',
    path: '/game',
  },
];

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeSheet = () => {
    setIsOpen(false);
  };
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[28px]  hover:text-accent transition-all duration-300 " />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <SheetTitle className="hidden">Menu</SheetTitle>
        <SheetDescription className="hidden">
          This is the mobile navigation. You can select a link to navigate.
        </SheetDescription>
        <nav className="flex flex-col justify-center items-center space-y-6 mt-16">
          {links.map((link, index) => {
            return (
              <Link
                onClick={closeSheet}
                href={link.path}
                key={index}
                className="capitalize font-medium"
              >
                {link.name}
              </Link>
            );
          })}
          <Link onClick={closeSheet} href="/contact">
            <Button>Contact</Button>
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
