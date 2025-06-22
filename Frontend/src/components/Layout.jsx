import React from 'react';
import { Link,  Outlet } from 'react-router-dom';


const Layout = () => {
  return (
    <>
      {/* HEADER NAVIGATION */}
      <header className="bg-blue-600 text-white px-6 py-4 shadow-md flex justify-between items-center">
        <Link to="/">
        <h1 className="text-xl font-bold">🧺 Item Manager</h1>
        </Link>
        <nav className="space-x-4">
          <Link to="/" className="hover:underline">View Items</Link>
          <Link to="/add" className="hover:underline">Add Item</Link>
        </nav>
      </header>

      {/* PAGE CONTENT */}
      <main className="p-6 bg-gray-50 min-h-screen">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
