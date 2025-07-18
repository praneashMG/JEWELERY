import { FaShoppingCart } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-4 shadow-md bg-white">

      <div className="text-xl font-bold text-yellow-600 tracking-widest">PGR</div>

      {/* Navigation Links */}
      <div className="flex items-center space-x-8 text-gray-800 font-medium">
        <a href="/" className="hover:text-yellow-600">HOME</a>
        <a href="#" className="hover:text-yellow-600">COLLECTIONS</a>
        <a href="#" className="hover:text-yellow-600">SHOP</a>
        <a href="#" className="hover:text-yellow-600">ABOUT</a>
        <a href="#" className="hover:text-yellow-600">CONTACT</a>

        {/* Cart Icon with Badge */}
        <div className="relative">
          <FaShoppingCart className="text-xl" />
          <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs font-semibold w-5 h-5 flex items-center justify-center rounded-full">
            0
          </span>
        </div>
      </div>
    </nav>
  );
}
