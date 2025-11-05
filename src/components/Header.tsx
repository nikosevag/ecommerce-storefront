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
      <header className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center justify-between h-16">
            {/* Left Section */}
            <div className="flex items-center">
              {/* Mobile burger menu - only visible on mobile */}
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="md:hidden p-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
                aria-label="Open menu">
                <Menu className="w-6 h-6" />
              </button>

              {/* Desktop Logo - only visible on desktop */}
              <div className="hidden md:block shrink-0">
                <Logo />
              </div>
            </div>

            {/* Mobile Logo - centered on mobile only */}
            <div className="md:hidden absolute left-1/2 transform -translate-x-1/2">
              <Logo />
            </div>

            {/* Desktop Navigation - centered on desktop, hidden on mobile */}
            <div className="hidden md:flex flex-1 justify-center">
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
