import Logo from './Logo';
import MiniCart from './MiniCart';
import { Navigation } from './Nav';

export function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="shrink-0">
            <Logo />
          </div>

          {/* Navigation */}
          <div className="hidden md:flex flex-1 justify-center">
            <Navigation />
          </div>

          {/* Cart and Mobile Menu */}
          <div className="flex items-center gap-4">
            {/* Mobile Navigation */}
            <div className="md:hidden">
              <Navigation />
            </div>

            {/* Mini Cart */}
            <MiniCart />
          </div>
        </div>
      </div>
    </header>
  );
}
