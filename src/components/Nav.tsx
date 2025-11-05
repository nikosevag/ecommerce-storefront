import { NavLink, useLocation } from 'react-router';
import { useState, useEffect, useRef } from 'react';
import { Home, Info, Tag, ChevronDown, LoaderCircle } from 'lucide-react';
import { fetchCategories } from '../lib/api';

export function Navigation() {
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const fetchedCategories = await fetchCategories();
        setCategories(fetchedCategories);
      } catch (error) {
        console.error('Failed to load categories:', error);
        // Continue with empty categories array if fetch fails
      } finally {
        setLoading(false);
      }
    };

    loadCategories();
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Close dropdown when route changes
  useEffect(() => {
    setIsDropdownOpen(false);
  }, [location]);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `flex items-center gap-2 px-3 py-2 rounded-lg font-medium transition-all duration-200 text-sm ${
      isActive
        ? 'bg-blue-600 text-white shadow-md'
        : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
    }`;

  // Capitalize category name for display
  const formatCategoryName = (category: string) => {
    return (
      category.charAt(0).toUpperCase() + category.slice(1).replace(/'/g, "'")
    );
  };

  // Check if we're currently on a category page
  const isOnCategoryPage = location.pathname.startsWith('/category/');
  const currentCategory = isOnCategoryPage
    ? decodeURIComponent(location.pathname.split('/category/')[1] || '')
    : '';

  const dropdownButtonClass = `flex items-center gap-2 px-3 py-2 rounded-lg font-medium transition-all duration-200 text-sm ${
    isOnCategoryPage
      ? 'bg-blue-600 text-white shadow-md'
      : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
  }`;

  return (
    <nav className="flex items-center gap-1">
      <NavLink to="/" end className={navLinkClass}>
        <Home className="h-4 w-4" />
        <span className="hidden sm:block">Home</span>
      </NavLink>

      {/* Categories Dropdown */}
      <div className="relative" ref={dropdownRef}>
        {loading ? (
          <div className="flex items-center gap-2 px-3 py-2 text-gray-500">
            <LoaderCircle className="h-4 w-4 animate-spin" />
            <span className="hidden text-sm sm:block">Loading...</span>
          </div>
        ) : (
          <>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className={dropdownButtonClass}
              type="button"
            >
              <Tag className="h-4 w-4" />
              <span className="hidden sm:block">
                {isOnCategoryPage
                  ? formatCategoryName(currentCategory)
                  : 'Categories'}
              </span>
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-200 ${
                  isDropdownOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            {isDropdownOpen && (
              <div className="absolute top-full left-0 z-50 mt-1 min-w-[200px] rounded-lg border border-gray-200 bg-white py-1 shadow-lg">
                {categories.map(category => (
                  <NavLink
                    key={category}
                    to={`/category/${encodeURIComponent(category)}`}
                    className={({ isActive }) =>
                      `block px-4 py-2 text-sm transition-colors duration-200 ${
                        isActive
                          ? 'bg-blue-600 text-white'
                          : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                      }`
                    }
                  >
                    {formatCategoryName(category)}
                  </NavLink>
                ))}
              </div>
            )}
          </>
        )}
      </div>

      <NavLink to="/about" className={navLinkClass}>
        <Info className="h-4 w-4" />
        <span className="hidden sm:block">About</span>
      </NavLink>
    </nav>
  );
}
