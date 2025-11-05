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
        <div
          className="fixed inset-0 bg-black/50 z-50"
          onClick={onClose}
        />
      )}

      {/* Sheet */}
      <div
        className={`fixed top-0 left-0 h-full w-full max-w-sm bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <div className="flex items-center gap-2">
              <Menu className="w-5 h-5" />
              <h2 className="text-lg font-semibold">Menu</h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <X className="w-5 h-5" />
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
