import Link from 'next/link';
import { profile } from '@/lib/content';
import Socials from './Socials';

const Footer = () => {
  return (
    <footer className="mt-auto border-t border-cream/10">
      <div className="container flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
        <p className="text-sm text-cream/45">
          © {new Date().getFullYear()} {profile.name}
        </p>
        <Link
          href={`mailto:${profile.email}`}
          className="text-sm text-cream/60 transition-colors hover:text-accent"
        >
          {profile.email}
        </Link>
        <Socials
          containerStyles="flex gap-3"
          iconStyles="w-9 h-9 text-sm border border-cream/15 rounded-lg flex justify-center items-center text-cream/70 hover:border-accent hover:text-accent transition-colors"
        />
      </div>
    </footer>
  );
};

export default Footer;
