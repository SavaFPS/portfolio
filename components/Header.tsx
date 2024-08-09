import Link from 'next/link';
import { Button } from './ui/button';

// componenets
import Nav from './Nav';
import Logo from '@/public/Logo';
import MobileNav from './MobileNav';

const Header = () => {
  return (
    <header className="py-4 xl:py-6 text-white bg-gradient-to-t to-black  from-primary mx-auto">
      <div className="container flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <Logo className={`w-10 sm:w-14 md:w-16 xl:w-20`} />
        </Link>

        {/* Descktop Nav */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button>Contact</Button>
          </Link>
        </div>

        {/* Mobile Nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
