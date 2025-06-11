import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function HeaderIsland() {
  // Navigation items with their respective routes
  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About me', href: '/about' },
    { name: 'Work', href: '/work' },
    { name: 'Experience', href: '/experience' }
  ];

  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 hidden md:block">
      <header className="h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-lg hover:shadow-xl max-w-12 expand [--expand-width:90vw]">
        <div className="flex items-center justify-between h-full">
          {/* Left side - Profile and Name */}
          <div className="flex items-center space-x-3 pl-2 pr-8">
            <div className="w-8 h-8 rounded-full overflow-hidden border border-white/30 bg-gray-200 flex-shrink-0">
              <Image
                src="/images/avatar-thumbnail.png"
                alt="Profile"
                width={32}
                height={32}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            
            {/* Name - appears with animation */}
            <div className="overflow-hidden ml-1 max-w-0 expand [--expand-width:300px]">
              <h1 className="text-lg font-semibold text-[var(--foreground)] whitespace-nowrap">
                Manish Kumar Lath
              </h1>
            </div>
          </div>

          {/* Right side - Navigation */}
          <nav className="flex items-center gap-12 pr-6  max-w-0 overflow-hidden expand [--expand-width:500px]">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-[var(--foreground)] relative min-w-16 text-center"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </header>
    </div>
  );
}