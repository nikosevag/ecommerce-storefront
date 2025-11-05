import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';
import Layout from './components/Layout.tsx';
import Home from './components/pages/Home.tsx';
import About from './components/pages/About.tsx';
import Error from './components/pages/Error.tsx';
import ProductDetailPage from './components/pages/ProductDetailPage.tsx';
import CartPage from './components/pages/CartPage.tsx';
import CheckoutPage from './components/pages/CheckoutPage.tsx';
import CategoryPage from './components/pages/CategoryPage.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: 'about', Component: About },
      { path: 'category/:category', Component: CategoryPage },
      { path: 'product/:id', Component: ProductDetailPage },
      { path: 'cart', Component: CartPage },
      { path: 'checkout', Component: CheckoutPage },
    ],
    ErrorBoundary: Error,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
