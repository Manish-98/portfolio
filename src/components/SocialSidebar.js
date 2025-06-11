import githubIcon from '@/icons/github.svg';
import linkedinIcon from '@/icons/linkedin.svg';
import mediumIcon from '@/icons/medium.svg';
import websiteIcon from '@/icons/website.svg';
import Link from 'next/link';

const socials = [
  {
    name: 'GitHub',
    href: 'https://github.com/Manish-98',
    icon: githubIcon,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/manishkumarlath/',
    icon: linkedinIcon,
  },
  {
    name: 'Medium',
    href: 'https://medium.com/@manishlath',
    icon: mediumIcon,
  },
  {
    name: 'Website',
    href: 'https://portfolio-lovat-pi-80.vercel.app/',
    icon: websiteIcon,
  }
];

export default function SocialSidebar() {
  return (
    <div className="fixed top-1/2 left-0 -translate-y-1/2 z-50">
      <div className="flex flex-col items-center bg-white/5 backdrop-blur-md shadow-xl rounded-r-lg p-2 space-y-4">
        {socials.map(({ name, href, icon }) => (
          <Link
            key={name}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group hover:scale-110 transition-transform"
          >
            <img
              src={icon.src}
              alt={name}
              className="w-6 h-6 grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
