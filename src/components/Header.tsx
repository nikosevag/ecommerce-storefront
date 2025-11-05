import { useState } from 'react';
import { Menu } from 'lucide-react';
import Logo from './Logo';
import MiniCart from './MiniCart';
import { Navigation } from './Nav';
import { MobileMenuSheet } from './MobileMenuSheet';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-gray-200 bg-white shadow-sm">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Left Section */}
            <div className="flex items-center">
              {/* Mobile burger menu - only visible on mobile */}
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="rounded-lg p-2 text-gray-700 transition-all duration-200 hover:bg-blue-50 hover:text-blue-600 md:hidden"
                aria-label="Open menu"
              >
                <Menu className="h-6 w-6" />
              </button>

              {/* Desktop Logo - only visible on desktop */}
              <div className="hidden shrink-0 md:block">
                <Logo />
              </div>
            </div>

            {/* Mobile Logo - centered on mobile only */}
            <div className="absolute left-1/2 -translate-x-1/2 transform md:hidden">
              <Logo />
            </div>

            {/* Desktop Navigation - centered on desktop, hidden on mobile */}
            <div className="hidden flex-1 justify-center md:flex">
              <Navigation />
            </div>

            {/* Right Section - Cart */}
            <div className="flex items-center">
              <MiniCart />
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Sheet */}
      <MobileMenuSheet
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
