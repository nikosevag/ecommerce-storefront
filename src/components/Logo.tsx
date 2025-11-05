import { NavLink } from 'react-router';
import { Store } from 'lucide-react';

function Logo() {
  return (
    <NavLink
      to="/"
      end
      className="group flex items-center gap-2 text-2xl font-bold text-gray-900 transition-colors hover:text-blue-600"
    >
      <div className="rounded-lg bg-blue-600 p-2 text-white transition-colors group-hover:bg-blue-700">
        <Store className="h-6 w-6" />
      </div>
      <span className="text-blue-600 transition-colors hover:text-blue-700">
        ShopHub
      </span>
    </NavLink>
  );
}

export default Logo;
