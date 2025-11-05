import { Outlet } from 'react-router';
import { Header } from './Header';

function Layout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="px-4 py-8 w-full max-w-7xl mx-auto">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
