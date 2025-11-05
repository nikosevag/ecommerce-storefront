import type { CartItem } from '../types/product';

interface CartItemRowProps {
  item: CartItem;
  onUpdateQuantity: (productId: number, quantity: number) => void;
  onRemoveItem: (productId: number) => void;
}

export function CartItemRow({
  item,
  onUpdateQuantity,
  onRemoveItem,
}: CartItemRowProps) {
  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = parseInt(e.target.value, 10);
    if (newQuantity > 0) {
      onUpdateQuantity(item.id, newQuantity);
    }
  };

  const incrementQuantity = () => {
    onUpdateQuantity(item.id, item.quantity + 1);
  };

  const decrementQuantity = () => {
    if (item.quantity > 1) {
      onUpdateQuantity(item.id, item.quantity - 1);
    }
  };

  const handleRemove = () => {
    onRemoveItem(item.id);
  };

  const itemTotal = item.price * item.quantity;

  return (
    <div className="flex items-center gap-4 border-b border-gray-200 py-4">
      {/* Product Image */}
      <div className="h-16 w-16 shrink-0 overflow-hidden rounded-md bg-gray-100">
        <img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-contain p-1"
        />
      </div>

      {/* Product Info */}
      <div className="min-w-0 flex-1">
        <h3 className="truncate text-sm font-medium text-gray-900">
          {item.title}
        </h3>
        <p className="text-sm text-gray-500">${item.price.toFixed(2)} each</p>
      </div>

      {/* Quantity Controls */}
      <div className="flex items-center gap-2">
        <button
          onClick={decrementQuantity}
          className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100 disabled:opacity-50"
          disabled={item.quantity <= 1}
        >
          −
        </button>
        <input
          type="number"
          value={item.quantity}
          onChange={handleQuantityChange}
          className="w-16 rounded-md border border-gray-300 py-1 text-center"
          min="1"
        />
        <button
          onClick={incrementQuantity}
          className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100"
        >
          +
        </button>
      </div>

      {/* Item Total */}
      <div className="w-20 text-right text-sm font-medium text-gray-900">
        ${itemTotal.toFixed(2)}
      </div>

      {/* Remove Button */}
      <button
        onClick={handleRemove}
        className="p-1 text-red-600 hover:text-red-800"
        title="Remove item"
      >
        <svg
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
          />
        </svg>
      </button>
    </div>
  );
}
