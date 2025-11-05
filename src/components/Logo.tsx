import { NavLink } from 'react-router';
import { Store } from 'lucide-react';

function Logo() {
  return (
    <NavLink
      to="/"
      end
      className="flex items-center gap-2 text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors group">
      <div className="bg-blue-600 text-white p-2 rounded-lg group-hover:bg-blue-700 transition-colors">
        <Store className="w-6 h-6" />
      </div>
      <span className="text-blue-600 hover:text-blue-700 transition-colors">
        ShopHub
      </span>
    </NavLink>
  );
}

export default Logo;
