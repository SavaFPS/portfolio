import Link from 'next/link';
import { Button } from './ui/button';

// componenets
import Nav from './Nav';
import MobileNav from './MobileNav';
import Logo from '@/public/Logo';

const Header = () => {
  return (
    <header className="py-4 xl:py-6 text-white bg-gradient-to-t to-black  from-primary mx-auto">
      <div className="container flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <Logo className="w-16 xl:w-20 transition-filter duration-300 ease-in-out hover:drop-shadow-custom" />
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
