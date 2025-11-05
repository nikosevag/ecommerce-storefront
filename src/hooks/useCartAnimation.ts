import { useState } from 'react';
import { useCartStore } from '../store/cartStore';
import type { Product } from '../types/product';

export function useCartAnimation() {
  const [isAdding, setIsAdding] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const addItem = useCartStore(state => state.addItem);

  const addItemWithAnimation = async (product: Product) => {
    setIsAdding(true);
    addItem(product);

    // Show success state
    setTimeout(() => {
      setIsAdding(false);
      setShowSuccess(true);
    }, 300);

    // Hide success state
    setTimeout(() => {
      setShowSuccess(false);
    }, 1500);
  };

  return {
    isAdding,
    showSuccess,
    addItemWithAnimation,
  };
}
