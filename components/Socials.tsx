import Link from 'next/link';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { profile } from '@/lib/content';

const socials = [
  {
    icon: <FaGithub />,
    path: profile.github,
    label: 'GitHub',
  },
  {
    icon: <FaLinkedinIn />,
    path: profile.linkedin,
    label: 'LinkedIn',
  },
];

interface SocialsProps {
  containerStyles?: string;
  iconStyles?: string;
}

const Socials = ({ containerStyles, iconStyles }: SocialsProps) => {
  return (
    <div className={containerStyles}>
      {socials.map((social) => (
        <Link
          key={social.path}
          href={social.path}
          className={iconStyles}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.label}
        >
          {social.icon}
        </Link>
      ))}
    </div>
  );
};

export default Socials;
