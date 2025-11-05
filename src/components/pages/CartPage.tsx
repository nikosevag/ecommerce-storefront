import { Link } from 'react-router';
import { Plus, Minus, Trash2 } from 'lucide-react';
import { useCartStore, useCartTotalPrice } from '../../store/cartStore';
import { CartItemRow } from '../CartItemRow';
import type { CartItem } from '../../types/product';

function CartPage() {
  const { items, removeItem, updateQuantity, clearCart } = useCartStore();
  const totalPrice = useCartTotalPrice();

  const handleQuantityChange = (productId: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeItem(productId);
    } else {
      updateQuantity(productId, newQuantity);
    }
  };

  // Mobile cart item component
  const MobileCartItem = ({ item }: { item: CartItem }) => (
    <div className="flex gap-3 bg-gray-50 p-3 rounded-lg">
      <div className="shrink-0 w-16 h-16 bg-white rounded-md overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-contain p-1"
        />
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="font-medium text-sm line-clamp-2 mb-1">{item.title}</h4>
        <p className="text-sm text-gray-600 mb-2">${item.price.toFixed(2)}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button
              onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
              className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors">
              <Minus className="w-3 h-3" />
            </button>
            <span className="w-8 text-center text-sm font-medium">
              {item.quantity}
            </span>
            <button
              onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
              className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors">
              <Plus className="w-3 h-3" />
            </button>
          </div>
          <button
            onClick={() => removeItem(item.id)}
            className="p-1 text-red-500 hover:text-red-700 transition-colors">
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );

  if (items.length === 0) {
    return (
      <div className="text-center py-12 px-4">
        <div className="mb-6">
          <svg
            className="mx-auto h-16 w-16 sm:h-24 sm:w-24 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17M17 13v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01"
            />
          </svg>
        </div>
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">
          Your cart is empty
        </h2>
        <p className="text-gray-600 mb-6">Add some products to get started</p>
        <Link
          to="/"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
          Shopping Cart
        </h1>
        <button
          onClick={clearCart}
          className="text-xs sm:text-sm text-gray-600 hover:text-red-600 transition-colors px-2 py-1 rounded">
          Clear Cart
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-4 sm:p-6">
          {/* Desktop Layout - Hidden on mobile */}
          <div className="hidden md:block">
            {items.map((item) => (
              <CartItemRow
                key={item.id}
                item={item}
                onUpdateQuantity={updateQuantity}
                onRemoveItem={removeItem}
              />
            ))}
          </div>

          {/* Mobile Layout - Hidden on desktop */}
          <div className="md:hidden space-y-4">
            {items.map((item) => (
              <MobileCartItem
                key={item.id}
                item={item}
              />
            ))}
          </div>
        </div>

        {/* Cart Summary */}
        <div className="border-t border-gray-200 p-4 sm:p-6 bg-gray-50">
          <div className="space-y-2 mb-4">
            <div className="flex justify-between text-sm text-gray-600">
              <span>
                Subtotal (
                {items.reduce((total, item) => total + item.quantity, 0)} items)
              </span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm text-gray-600">
              <span>Shipping</span>
              <span>{totalPrice > 50 ? 'Free' : '$5.99'}</span>
            </div>
            <div className="flex justify-between text-sm text-gray-600">
              <span>Tax</span>
              <span>${(totalPrice * 0.08).toFixed(2)}</span>
            </div>
            <div className="border-t pt-2">
              <div className="flex justify-between text-lg font-semibold text-gray-900">
                <span>Total</span>
                <span>
                  $
                  {(
                    totalPrice +
                    (totalPrice > 50 ? 0 : 5.99) +
                    totalPrice * 0.08
                  ).toFixed(2)}
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/"
              className="flex-1 bg-gray-200 text-gray-800 py-3 px-6 rounded-lg hover:bg-gray-300 transition-colors duration-200 font-medium text-center">
              Continue Shopping
            </Link>
            <Link
              to="/checkout"
              className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium text-center">
              Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
