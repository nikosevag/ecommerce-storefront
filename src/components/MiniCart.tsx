import { useState, useEffect, useRef } from 'react';
import { ShoppingBag } from 'lucide-react';
import { useCartTotalItems } from '../store/cartStore';
import { CartSheet } from './CartSheet';

function MiniCart() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [badgeAnimation, setBadgeAnimation] = useState('');
  const totalItems = useCartTotalItems();
  const prevTotalItemsRef = useRef(totalItems);

  // Animate badge when items are added
  useEffect(() => {
    if (totalItems > prevTotalItemsRef.current) {
      setBadgeAnimation('animate-ping');
      const timer = setTimeout(() => {
        setBadgeAnimation('animate-pulse');
        setTimeout(() => setBadgeAnimation(''), 1000);
      }, 600);
      return () => clearTimeout(timer);
    }
    prevTotalItemsRef.current = totalItems;
  }, [totalItems]);

  return (
    <>
      <button
        onClick={() => setIsSheetOpen(true)}
        className="group relative flex items-center gap-2 rounded-lg p-3 text-gray-700 transition-all duration-200 hover:bg-blue-50 hover:text-blue-600"
      >
        <div className="relative">
          <ShoppingBag className="h-6 w-6 transition-transform group-hover:scale-110" />
          {totalItems > 0 && (
            <span
              className={`absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-[10px] font-medium text-white transition-all duration-300 ${badgeAnimation}`}
            >
              {totalItems > 99 ? '99+' : totalItems}
            </span>
          )}
        </div>
        <span className="hidden text-sm font-medium sm:block">Cart</span>
      </button>

      <CartSheet isOpen={isSheetOpen} onClose={() => setIsSheetOpen(false)} />
    </>
  );
}

export default MiniCart;
