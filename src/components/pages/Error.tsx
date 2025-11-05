import { NavLink } from 'react-router';
import { Home, Search, ShoppingBag, ArrowLeft } from 'lucide-react';

function Error() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md text-center">
        {/* Error Illustration */}
        <div className="mb-8">
          <div className="relative mx-auto mb-6 h-32 w-32">
            <div className="absolute inset-0 flex items-center justify-center rounded-full bg-blue-100">
              <Search className="h-16 w-16 text-blue-600" />
            </div>
            <div className="absolute -top-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-red-500 text-sm font-bold text-white">
              !
            </div>
          </div>
        </div>

        {/* Error Content */}
        <div className="mb-8 rounded-lg bg-white p-8 shadow-md">
          <h1 className="mb-4 text-4xl font-bold text-gray-900">404</h1>
          <h2 className="mb-3 text-xl font-semibold text-gray-700">
            Page Not Found
          </h2>
          <p className="mb-6 leading-relaxed text-gray-600">
            Oops! The page you're looking for seems to have wandered off. Don't
            worry, it happens to the best of us.
          </p>

          {/* Action Buttons */}
          <div className="space-y-4">
            <NavLink
              to="/"
              end
              className="group flex w-full items-center justify-center gap-2 rounded-md bg-blue-600 px-6 py-3 font-medium text-white transition-colors duration-300 hover:bg-blue-700"
            >
              <Home className="h-5 w-5 transition-transform group-hover:scale-110" />
              Back to Home
            </NavLink>

            <NavLink
              to="/"
              end
              className="group flex w-full items-center justify-center gap-2 rounded-md bg-gray-100 px-6 py-3 font-medium text-gray-700 transition-colors duration-300 hover:bg-gray-200"
            >
              <ShoppingBag className="h-5 w-5 transition-transform group-hover:scale-110" />
              Continue Shopping
            </NavLink>
          </div>
        </div>

        {/* Go Back Option */}
        <button
          onClick={() => window.history.back()}
          className="mx-auto flex items-center gap-2 text-gray-500 transition-colors duration-300 hover:text-gray-700"
        >
          <ArrowLeft className="h-4 w-4" />
          Go back to previous page
        </button>
      </div>
    </div>
  );
}

export default Error;
