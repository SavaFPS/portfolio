import Link from 'next/link';
import { Button } from './ui/button';
import Nav from './Nav';
import MobileNav from './MobileNav';
import Logo from './Logo';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-cream/10 bg-primary/80 backdrop-blur-md">
      <div className="container flex items-center justify-between py-4">
        <Link href="/" aria-label="Home">
          <Logo className="w-14 transition duration-300 xl:w-16 xl:hover:drop-shadow-glow" />
        </Link>

        <div className="hidden items-center gap-8 xl:flex">
          <Nav />
          <Button asChild>
            <Link href="/contact">Contact</Link>
          </Button>
        </div>

        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
