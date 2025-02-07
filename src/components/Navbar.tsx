"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(!!localStorage.getItem("token"));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  return (
    <nav className="bg-gray-800 p-4 text-white flex justify-between">
      <Link href="/" className="text-lg font-bold">Blog Site</Link>
      <div>
        <Link href="/blog" className="mr-4">Blogs</Link>
        {isLoggedIn ? (
          <button onClick={handleLogout} className="bg-red-500 px-4 py-1 rounded">
            Logout
          </button>
        ) : (
          <Link href="/auth/login" className="bg-blue-500 px-4 py-1 rounded">Login</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
