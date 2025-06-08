"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export default function MobileHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Navigation items with their respective routes
  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About me', href: '/about' },
    { name: 'Work', href: '/work' },
    { name: 'Experience', href: '/experience' }
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Mobile Header Button */}
      <div className="fixed top-4 left-4 z-50 md:hidden">
        <button
          onClick={toggleMobileMenu}
          className="w-10 h-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
          aria-label="Toggle menu"
        >
          {/* Hamburger Icon */}
          <div className="w-4 h-3 flex flex-col justify-between">
            <span className={`block h-0.5 w-full bg-[var(--foreground)] transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
            <span className={`block h-0.5 w-full bg-[var(--foreground)] transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block h-0.5 w-full bg-[var(--foreground)] transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div 
          className="absolute inset-0 bg-[var(--background)] backdrop-blur-sm transition-opacity duration-300"
          onClick={closeMobileMenu}
        ></div>
        <div className={`absolute top-16 left-4 w-44 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-xl p-4 transition-all duration-300 ease-out ${isMobileMenuOpen ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-2 scale-95'}`}>
          <nav className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={closeMobileMenu}
                className="text-sm font-medium text-[var(--foreground)] hover:text-blue-600 transition-colors duration-200 py-2 px-3 rounded-lg hover:bg-white/20 opacity-80 hover:opacity-100"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}