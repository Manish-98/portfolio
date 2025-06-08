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
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[80%] h-12 hidden md:block">
      <header className="w-full h-full bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
        <div className="flex items-center justify-between h-full pl-2 pr-6">
          {/* Left side - Profile and Name */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full overflow-hidden border border-white/30 bg-gray-200">
              <Image
                src="/images/profile.jpg"
                alt="Profile"
                width={32}
                height={32}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <h1 className="text-lg font-semibold text-[var(--foreground)]">
              Manish Kumar Lath
            </h1>
          </div>

          {/* Right side - Navigation */}
          <nav className="flex items-center space-x-12">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-[var(--foreground)] hover:text-blue-600 transition-colors duration-200 relative group opacity-80 hover:opacity-100"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </nav>
        </div>

        {/* Subtle glow effect */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
      </header>
    </div>
  );
}