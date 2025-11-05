import { NavLink } from 'react-router';
import { Home, Search, ShoppingBag, ArrowLeft } from 'lucide-react';

function Error() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        {/* Error Illustration */}
        <div className="mb-8">
          <div className="relative mx-auto w-32 h-32 mb-6">
            <div className="absolute inset-0 bg-blue-100 rounded-full flex items-center justify-center">
              <Search className="w-16 h-16 text-blue-600" />
            </div>
            <div className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
              !
            </div>
          </div>
        </div>

        {/* Error Content */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1>
          <h2 className="text-xl font-semibold text-gray-700 mb-3">
            Page Not Found
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Oops! The page you're looking for seems to have wandered off. Don't
            worry, it happens to the best of us.
          </p>

          {/* Action Buttons */}
          <div className="space-y-4">
            <NavLink
              to="/"
              end
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors duration-300 font-medium flex items-center justify-center gap-2 group">
              <Home className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Back to Home
            </NavLink>

            <NavLink
              to="/"
              end
              className="w-full bg-gray-100 text-gray-700 py-3 px-6 rounded-md hover:bg-gray-200 transition-colors duration-300 font-medium flex items-center justify-center gap-2 group">
              <ShoppingBag className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Continue Shopping
            </NavLink>
          </div>
        </div>

        {/* Go Back Option */}
        <button
          onClick={() => window.history.back()}
          className="text-gray-500 hover:text-gray-700 transition-colors duration-300 flex items-center gap-2 mx-auto">
          <ArrowLeft className="w-4 h-4" />
          Go back to previous page
        </button>
      </div>
    </div>
  );
}

export default Error;
