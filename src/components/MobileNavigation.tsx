import { NavLink, useLocation } from 'react-router';
import { useState, useEffect } from 'react';
import { Home, Info, Tag, ChevronRight, LoaderCircle } from 'lucide-react';
import { fetchCategories } from '../lib/api';

interface MobileNavigationProps {
  onLinkClick?: () => void;
}

export function MobileNavigation({ onLinkClick }: MobileNavigationProps) {
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [isCategoriesExpanded, setIsCategoriesExpanded] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const fetchedCategories = await fetchCategories();
        setCategories(fetchedCategories);
      } catch (error) {
        console.error('Failed to load categories:', error);
      } finally {
        setLoading(false);
      }
    };

    loadCategories();
  }, []);

  // Capitalize category name for display
  const formatCategoryName = (category: string) => {
    return (
      category.charAt(0).toUpperCase() + category.slice(1).replace(/'/g, "'")
    );
  };

  // Check if we're currently on a category page
  const isOnCategoryPage = location.pathname.startsWith('/category/');

  const handleLinkClick = () => {
    if (onLinkClick) {
      onLinkClick();
    }
  };

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `flex items-center gap-3 px-4 py-3 text-base font-medium transition-all duration-200 border-b border-gray-100 ${
      isActive
        ? 'bg-blue-50 text-blue-600 border-l-4 border-l-blue-600'
        : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
    }`;

  const categoryLinkClass = ({ isActive }: { isActive: boolean }) =>
    `flex items-center gap-3 px-8 py-2.5 text-sm transition-all duration-200 ${
      isActive
        ? 'bg-blue-50 text-blue-600 border-l-4 border-l-blue-600'
        : 'text-gray-600 hover:bg-gray-50 hover:text-blue-600'
    }`;

  return (
    <nav className="flex flex-col">
      {/* Home */}
      <NavLink
        to="/"
        end
        className={navLinkClass}
        onClick={handleLinkClick}>
        <Home className="w-5 h-5" />
        <span>Home</span>
      </NavLink>

      {/* Categories Section */}
      <div className="border-b border-gray-100">
        <button
          onClick={() => setIsCategoriesExpanded(!isCategoriesExpanded)}
          className={`w-full flex items-center justify-between gap-3 px-4 py-3 text-base font-medium transition-all duration-200 ${
            isOnCategoryPage
              ? 'bg-blue-50 text-blue-600 border-l-4 border-l-blue-600'
              : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
          }`}
          type="button">
          <div className="flex items-center gap-3">
            <Tag className="w-5 h-5" />
            <span>Categories</span>
            {loading && <LoaderCircle className="w-4 h-4 animate-spin" />}
          </div>
          {!loading && (
            <ChevronRight
              className={`w-4 h-4 transition-transform duration-200 ${
                isCategoriesExpanded ? 'rotate-90' : ''
              }`}
            />
          )}
        </button>

        {/* Categories List */}
        {isCategoriesExpanded && !loading && (
          <div className="bg-gray-25">
            {categories.map((category) => (
              <NavLink
                key={category}
                to={`/category/${encodeURIComponent(category)}`}
                className={categoryLinkClass}
                onClick={handleLinkClick}>
                <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                <span>{formatCategoryName(category)}</span>
              </NavLink>
            ))}
          </div>
        )}
      </div>

      {/* About */}
      <NavLink
        to="/about"
        className={navLinkClass}
        onClick={handleLinkClick}>
        <Info className="w-5 h-5" />
        <span>About</span>
      </NavLink>
    </nav>
  );
}
