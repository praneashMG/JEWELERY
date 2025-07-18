import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar({ cartItemCount }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md px-6 md:px-10 py-4 z-50">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-yellow-600 tracking-widest">
          PGR
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8 text-gray-800 font-medium">
          <Link to="/" className="hover:text-yellow-600">HOME</Link>
          {/* <Link to="/collections" className="hover:text-yellow-600">COLLECTIONS</Link> */}
          <Link to="/LuxuryGoldChokers" className="hover:text-yellow-600">SHOP</Link>
          <Link to="/about" className="hover:text-yellow-600">ABOUT</Link>
          <Link to="/contact" className="hover:text-yellow-600">CONTACT</Link>
          <Link to="/CartPage" className="relative">
            <FaShoppingCart className="text-xl" />
            <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs font-semibold w-5 h-5 flex items-center justify-center rounded-full">
              {cartItemCount}
            </span>
          </Link>
        </div>

        {/* Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? (
              <FaTimes className="text-2xl text-gray-700" />
            ) : (
              <FaBars className="text-2xl text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 flex flex-col space-y-4 text-gray-800 font-medium">
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-yellow-600">HOME</Link>
          <Link to="/collections" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-yellow-600">COLLECTIONS</Link>
          <Link to="/LuxuryGoldChokers" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-yellow-600">SHOP</Link>
          <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-yellow-600">ABOUT</Link>
          <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-yellow-600">CONTACT</Link>
          <Link to="/CartPage" onClick={() => setIsMobileMenuOpen(false)} className="relative w-fit">
            <FaShoppingCart className="text-xl" />
            <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs font-semibold w-5 h-5 flex items-center justify-center rounded-full">
              {cartItemCount}
            </span>
          </Link>
        </div>
      )}
    </nav>
  );
}
