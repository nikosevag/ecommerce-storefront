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
        className="relative flex items-center gap-2 p-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 group">
        <div className="relative">
          <ShoppingBag className="w-6 h-6 transition-transform group-hover:scale-110" />
          {totalItems > 0 && (
            <span
              className={`absolute -top-2 -right-2 bg-blue-600 text-white text-[10px] rounded-full w-5 h-5 flex items-center justify-center font-medium transition-all duration-300 ${badgeAnimation}`}>
              {totalItems > 99 ? '99+' : totalItems}
            </span>
          )}
        </div>
        <span className="text-sm font-medium hidden sm:block">Cart</span>
      </button>

      <CartSheet
        isOpen={isSheetOpen}
        onClose={() => setIsSheetOpen(false)}
      />
    </>
  );
}

export default MiniCart;
