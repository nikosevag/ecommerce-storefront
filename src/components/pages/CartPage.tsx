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
    <div className="flex gap-3 rounded-lg bg-gray-50 p-3">
      <div className="h-16 w-16 shrink-0 overflow-hidden rounded-md bg-white">
        <img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-contain p-1"
        />
      </div>
      <div className="min-w-0 flex-1">
        <h4 className="mb-1 line-clamp-2 text-sm font-medium">{item.title}</h4>
        <p className="mb-2 text-sm text-gray-600">${item.price.toFixed(2)}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button
              onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
              className="flex h-7 w-7 items-center justify-center rounded-full border border-gray-300 transition-colors hover:bg-gray-100"
            >
              <Minus className="h-3 w-3" />
            </button>
            <span className="w-8 text-center text-sm font-medium">
              {item.quantity}
            </span>
            <button
              onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
              className="flex h-7 w-7 items-center justify-center rounded-full border border-gray-300 transition-colors hover:bg-gray-100"
            >
              <Plus className="h-3 w-3" />
            </button>
          </div>
          <button
            onClick={() => removeItem(item.id)}
            className="p-1 text-red-500 transition-colors hover:text-red-700"
          >
            <Trash2 className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );

  if (items.length === 0) {
    return (
      <div className="px-4 py-12 text-center">
        <div className="mb-6">
          <svg
            className="mx-auto h-16 w-16 text-gray-400 sm:h-24 sm:w-24"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17M17 13v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01"
            />
          </svg>
        </div>
        <h2 className="mb-2 text-xl font-semibold text-gray-900 sm:text-2xl">
          Your cart is empty
        </h2>
        <p className="mb-6 text-gray-600">Add some products to get started</p>
        <Link
          to="/"
          className="inline-block rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-colors duration-200 hover:bg-blue-700"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-900 sm:text-2xl">
          Shopping Cart
        </h1>
        <button
          onClick={clearCart}
          className="rounded px-2 py-1 text-xs text-gray-600 transition-colors hover:text-red-600 sm:text-sm"
        >
          Clear Cart
        </button>
      </div>

      <div className="rounded-lg border border-gray-200 bg-white shadow-sm">
        <div className="p-4 sm:p-6">
          {/* Desktop Layout - Hidden on mobile */}
          <div className="hidden md:block">
            {items.map(item => (
              <CartItemRow
                key={item.id}
                item={item}
                onUpdateQuantity={updateQuantity}
                onRemoveItem={removeItem}
              />
            ))}
          </div>

          {/* Mobile Layout - Hidden on desktop */}
          <div className="space-y-4 md:hidden">
            {items.map(item => (
              <MobileCartItem key={item.id} item={item} />
            ))}
          </div>
        </div>

        {/* Cart Summary */}
        <div className="border-t border-gray-200 bg-gray-50 p-4 sm:p-6">
          <div className="mb-4 space-y-2">
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

          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              to="/"
              className="flex-1 rounded-lg bg-gray-200 px-6 py-3 text-center font-medium text-gray-800 transition-colors duration-200 hover:bg-gray-300"
            >
              Continue Shopping
            </Link>
            <Link
              to="/checkout"
              className="flex-1 rounded-lg bg-blue-600 px-6 py-3 text-center font-medium text-white transition-colors duration-200 hover:bg-blue-700"
            >
              Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
