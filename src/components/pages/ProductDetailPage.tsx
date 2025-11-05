import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router';
import { ShoppingCart, Check, Tag } from 'lucide-react';
import type { Product } from '../../types/product';
import { fetchProductById } from '../../lib/api';
import { useCartAnimation } from '../../hooks/useCartAnimation';

function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { isAdding, showSuccess, addItemWithAnimation } = useCartAnimation();

  useEffect(() => {
    const loadProduct = async () => {
      if (!id) return;

      try {
        setIsLoading(true);
        setError(null);
        const fetchedProduct = await fetchProductById(parseInt(id, 10));
        setProduct(fetchedProduct);
      } catch (err) {
        setError('Failed to load product. Please try again later.');
        console.error('Error loading product:', err);
      } finally {
        setIsLoading(false);
      }
    };

    loadProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      addItemWithAnimation(product);
    }
  };

  if (isLoading) {
    return (
      <div className="flex min-h-64 items-center justify-center">
        <div className="h-12 w-12 animate-spin rounded-full border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="py-12 text-center">
        <div className="mb-4 text-red-600">{error || 'Product not found'}</div>
        <Link
          to="/"
          className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        >
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl">
      {/* Breadcrumb */}
      <nav className="mb-6">
        <Link to="/" className="text-blue-600 hover:text-blue-800">
          ← Back to Products
        </Link>
      </nav>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Product Image */}
        <div className="flex items-center justify-center rounded-lg bg-gray-100 p-8">
          <img
            src={product.image}
            alt={product.title}
            className="max-h-96 max-w-full object-contain"
          />
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="mb-2 text-3xl font-bold text-gray-900">
              {product.title}
            </h1>
            <Link
              to={`/category/${encodeURIComponent(product.category)}`}
              className="flex items-center gap-1 text-blue-600 capitalize transition-colors duration-200 hover:text-blue-800 hover:underline"
            >
              <Tag className="h-4 w-4" />
              {product.category}
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-3xl font-bold text-gray-900">
              ${product.price.toFixed(2)}
            </span>
            <div className="flex items-center text-sm text-gray-600">
              <span className="mr-1 text-yellow-500">★</span>
              <span>{product.rating.rate}</span>
              <span className="ml-1">({product.rating.count} reviews)</span>
            </div>
          </div>

          <div>
            <h3 className="mb-2 text-lg font-semibold text-gray-900">
              Description
            </h3>
            <p className="leading-relaxed text-gray-700">
              {product.description}
            </p>
          </div>

          <div className="space-y-4">
            <button
              onClick={handleAddToCart}
              disabled={isAdding || showSuccess}
              className={`flex w-full transform items-center justify-center gap-2 rounded-lg px-6 py-3 text-lg font-medium transition-all duration-300 ${
                isAdding
                  ? 'scale-95 animate-pulse bg-blue-700 text-white'
                  : showSuccess
                    ? 'scale-95 bg-green-600 text-white shadow-lg'
                    : 'bg-blue-600 text-white hover:scale-105 hover:bg-blue-700 hover:shadow-lg active:scale-95'
              }`}
            >
              {isAdding ? (
                <>
                  <ShoppingCart className="h-5 w-5 animate-spin" />
                  Adding to Cart...
                </>
              ) : showSuccess ? (
                <>
                  <Check className="h-5 w-5 animate-bounce" />
                  Added to Cart!
                </>
              ) : (
                <>
                  <ShoppingCart className="h-5 w-5" />
                  Add to Cart
                </>
              )}
            </button>

            <div className="text-sm text-gray-600">
              <p>✓ Free shipping on orders over $50</p>
              <p>✓ 30-day return policy</p>
              <p>✓ Secure checkout</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailPage;
