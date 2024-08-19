import Link from 'next/link';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const socials = [
  {
    icon: <FaGithub />,
    path: 'https://github.com/SavaFPS',
  },
  {
    icon: <FaLinkedinIn />,
    path: 'https://www.linkedin.com/in/sava-tasic-428079264/',
  },
];

interface SocialsProps {
  containerStyles?: string;
  iconStyles?: string;
}

const Socials = ({ containerStyles, iconStyles }: SocialsProps) => {
  return (
    <div className={containerStyles}>
      {socials.map((social, index) => {
        return (
          <Link
            key={index}
            href={social.path}
            className={iconStyles}
            target="_blank"
          >
            {social.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
