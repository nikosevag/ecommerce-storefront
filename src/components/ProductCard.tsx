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
    <div className="overflow-hidden rounded-lg bg-white shadow-md transition-shadow duration-300 hover:shadow-lg">
      <Link to={`/product/${product.id}`} className="block">
        <div className="aspect-square overflow-hidden bg-gray-100">
          <img
            src={product.image}
            alt={product.title}
            className="h-full w-full object-contain p-4 transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="p-4">
          <h3 className="mb-2 line-clamp-2 min-h-12 font-semibold text-gray-900">
            {product.title}
          </h3>
          <div className="mb-3 flex items-center justify-between">
            <span className="text-2xl font-bold text-gray-900">
              ${product.price.toFixed(2)}
            </span>
            <div className="flex items-center text-sm text-gray-600">
              <span className="mr-1 text-yellow-500">★</span>
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
          className={`flex w-full transform items-center justify-center gap-2 rounded-md px-4 py-2 font-medium transition-all duration-300 ${
            isAdding
              ? 'scale-95 animate-pulse bg-blue-700 text-white'
              : showSuccess
                ? 'scale-95 bg-green-600 text-white'
                : 'bg-blue-600 text-white hover:scale-105 hover:bg-blue-700 active:scale-95'
          }`}
        >
          {isAdding ? (
            <>
              <ShoppingCart className="h-4 w-4 animate-spin" />
              Adding...
            </>
          ) : showSuccess ? (
            <>
              <Check className="h-4 w-4 animate-bounce" />
              Added!
            </>
          ) : (
            <>
              <ShoppingCart className="h-4 w-4" />
              Add to Cart
            </>
          )}
        </button>
      </div>
    </div>
  );
}
