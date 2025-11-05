import { X, Menu } from 'lucide-react';
import { MobileNavigation } from './MobileNavigation';

interface MobileMenuSheetProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenuSheet({ isOpen, onClose }: MobileMenuSheetProps) {
  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/50" onClick={onClose} />
      )}

      {/* Sheet */}
      <div
        className={`fixed top-0 left-0 z-50 h-full w-full max-w-sm transform bg-white shadow-xl transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-gray-200 p-4">
            <div className="flex items-center gap-2">
              <Menu className="h-5 w-5" />
              <h2 className="text-lg font-semibold">Menu</h2>
            </div>
            <button
              onClick={onClose}
              className="rounded-full p-2 transition-colors hover:bg-gray-100"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Navigation Content */}
          <div className="flex-1 overflow-y-auto">
            <MobileNavigation onLinkClick={onClose} />
          </div>
        </div>
      </div>
    </>
  );
}
