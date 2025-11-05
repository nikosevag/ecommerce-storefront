import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { fetchProductsByCategory } from '../../lib/api';
import type { Product } from '../../types/product';
import { ProductCard } from '../ProductCard';
import { LoaderCircle, AlertCircle } from 'lucide-react';

export default function CategoryPage() {
  const { category } = useParams<{ category: string }>();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadCategoryProducts = async () => {
      if (!category) return;

      try {
        setLoading(true);
        setError(null);
        const categoryProducts = await fetchProductsByCategory(category);
        setProducts(categoryProducts);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : 'Failed to load products',
        );
      } finally {
        setLoading(false);
      }
    };

    loadCategoryProducts();
  }, [category]);

  // Capitalize the category name for display
  const displayCategoryName = category
    ? category.charAt(0).toUpperCase() + category.slice(1).replace(/'/g, "'")
    : '';

  if (loading) {
    return (
      <div className="flex min-h-[50vh] flex-col items-center justify-center gap-4">
        <LoaderCircle className="h-8 w-8 animate-spin text-blue-600" />
        <p className="text-gray-600">
          Loading {displayCategoryName} products...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-[50vh] flex-col items-center justify-center gap-4">
        <AlertCircle className="h-12 w-12 text-red-500" />
        <div className="text-center">
          <h2 className="mb-2 text-xl font-semibold text-gray-900">
            Error Loading Products
          </h2>
          <p className="text-gray-600">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-8">
      {/* Category Header */}
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold text-gray-900">
          {displayCategoryName}
        </h1>
        <p className="text-gray-600">
          Showing {products.length} product{products.length !== 1 ? 's' : ''}
        </p>
      </div>

      {/* Products Grid */}
      {products.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="flex min-h-[30vh] flex-col items-center justify-center gap-4">
          <div className="text-center">
            <h2 className="mb-2 text-xl font-semibold text-gray-900">
              No products found
            </h2>
            <p className="text-gray-600">
              There are currently no products in the {displayCategoryName}{' '}
              category.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
