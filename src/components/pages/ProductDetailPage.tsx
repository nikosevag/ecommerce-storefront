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
      <div className="flex justify-center items-center min-h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="text-center py-12">
        <div className="text-red-600 mb-4">{error || 'Product not found'}</div>
        <Link
          to="/"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto">
      {/* Breadcrumb */}
      <nav className="mb-6">
        <Link
          to="/"
          className="text-blue-600 hover:text-blue-800">
          ← Back to Products
        </Link>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="bg-gray-100 rounded-lg p-8 flex items-center justify-center">
          <img
            src={product.image}
            alt={product.title}
            className="max-w-full max-h-96 object-contain"
          />
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {product.title}
            </h1>
            <Link
              to={`/category/${encodeURIComponent(product.category)}`}
              className="text-blue-600 hover:text-blue-800 capitalize hover:underline transition-colors duration-200 flex items-center gap-1">
              <Tag className="w-4 h-4" />
              {product.category}
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-3xl font-bold text-gray-900">
              ${product.price.toFixed(2)}
            </span>
            <div className="flex items-center text-sm text-gray-600">
              <span className="text-yellow-500 mr-1">★</span>
              <span>{product.rating.rate}</span>
              <span className="ml-1">({product.rating.count} reviews)</span>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Description
            </h3>
            <p className="text-gray-700 leading-relaxed">
              {product.description}
            </p>
          </div>

          <div className="space-y-4">
            <button
              onClick={handleAddToCart}
              disabled={isAdding || showSuccess}
              className={`w-full py-3 px-6 rounded-lg font-medium text-lg flex items-center justify-center gap-2 transition-all duration-300 transform ${
                isAdding
                  ? 'bg-blue-700 text-white scale-95 animate-pulse'
                  : showSuccess
                  ? 'bg-green-600 text-white scale-95 shadow-lg'
                  : 'bg-blue-600 text-white hover:bg-blue-700 hover:scale-105 hover:shadow-lg active:scale-95'
              }`}>
              {isAdding ? (
                <>
                  <ShoppingCart className="w-5 h-5 animate-spin" />
                  Adding to Cart...
                </>
              ) : showSuccess ? (
                <>
                  <Check className="w-5 h-5 animate-bounce" />
                  Added to Cart!
                </>
              ) : (
                <>
                  <ShoppingCart className="w-5 h-5" />
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
