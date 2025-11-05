import { Link } from 'react-router';
import { ShoppingCart, Check } from 'lucide-react';
import type { Product } from '../types/product';
import { useCartAnimation } from '../hooks/useCartAnimation';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { isAdding, showSuccess, addItemWithAnimation } = useCartAnimation();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigation when clicking the button
    addItemWithAnimation(product);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <Link
        to={`/product/${product.id}`}
        className="block">
        <div className="aspect-square overflow-hidden bg-gray-100">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-contain p-4 hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 min-h-12">
            {product.title}
          </h3>
          <div className="flex items-center justify-between mb-3">
            <span className="text-2xl font-bold text-gray-900">
              ${product.price.toFixed(2)}
            </span>
            <div className="flex items-center text-sm text-gray-600">
              <span className="text-yellow-500 mr-1">★</span>
              <span>{product.rating.rate}</span>
              <span className="ml-1">({product.rating.count})</span>
            </div>
          </div>
        </div>
      </Link>
      <div className="px-4 pb-4">
        <button
          onClick={handleAddToCart}
          disabled={isAdding || showSuccess}
          className={`w-full py-2 px-4 rounded-md transition-all duration-300 font-medium flex items-center justify-center gap-2 transform ${
            isAdding
              ? 'bg-blue-700 text-white scale-95 animate-pulse'
              : showSuccess
              ? 'bg-green-600 text-white scale-95'
              : 'bg-blue-600 text-white hover:bg-blue-700 hover:scale-105 active:scale-95'
          }`}>
          {isAdding ? (
            <>
              <ShoppingCart className="w-4 h-4 animate-spin" />
              Adding...
            </>
          ) : showSuccess ? (
            <>
              <Check className="w-4 h-4 animate-bounce" />
              Added!
            </>
          ) : (
            <>
              <ShoppingCart className="w-4 h-4" />
              Add to Cart
            </>
          )}
        </button>
      </div>
    </div>
  );
}
