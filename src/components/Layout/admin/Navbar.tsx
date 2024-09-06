import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AdminNavbarContext } from '../../../context/adminnavbar';

const NavbarAdmin: React.FC = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navbar = useContext(AdminNavbarContext);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  

  return (
    <nav className="bg-red-700 shadow-md text-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-white">
            <Link to="/home">BrandName</Link>
          </div>
          <div className="hidden md:flex space-x-8">
            <Link
              to="/admin/dashboard"
              className={` hover:opacity-20 transition duration-300 ${navbar.activeDirectory == "/admin/dashboard" ? "text-black" : "text-white"} `}
            >
              DashBoard
            </Link>
            <Link
              to="/admin/products"
              className={` hover:opacity-20 transition duration-300 ${navbar.activeDirectory == "/admin/products" ? "text-black" : "text-white"} `}
            >
              Products
            </Link>
            <Link
              to="/admin/add"
              className={` hover:opacity-20 transition duration-300 ${navbar.activeDirectory == "/admin/add" ? "text-black" : "text-white"} relative `}
            >
              Add         
            </Link>
          </div>
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-800 focus:outline-none focus:text-gray-600"
              aria-label="Toggle menu"
              onClick={toggleMenu}
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden flex flex-col w-full items-cente justify-center gap-[20px] text-[20px]">
          <Link
            to="/home"
            className={` hover:opacity-20 transition duration-300 ${navbar.activeDirectory == "home" ? "text-orange-500" : "text-gray-800"} `}
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            to="/products"
            className={` hover:opacity-20 transition duration-300 ${navbar.activeDirectory == "products" ? "text-orange-500" : "text-gray-800"} `}
            onClick={toggleMenu}
          >
            Products
          </Link>
          <Link
            to="/liked"
            className={` hover:opacity-20 transition duration-300 ${navbar.activeDirectory == "liked" ? "text-orange-500" : "text-gray-800"} relative`}
            onClick={toggleMenu}
          >
            Liked 

          </Link>
        </div>
      )}
    </nav>
  );
};

export default NavbarAdmin;
