import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="app-layout">
      <nav className="bg-gray-100 ">
        <div className="flex gap-4">
          <Link to="/dashboard" className="text-[#0a8a8a] hover:text-teal-700">
          </Link>
          <Link to="/users" className="text-[#0a8a8a] hover:text-teal-700">
          </Link>
        </div>
      </nav>
      <div className="p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;