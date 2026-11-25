import { Link } from "react-router-dom";

function Navbar({ cartCount, wishlistCount }) {
  return (
    <nav className="flex flex-wrap items-center justify-between gap-4 bg-slate-900 px-8 py-5 text-white">
      <Link to="/" className="text-2xl font-bold">
        ShopSphere
      </Link>

      <div className="flex flex-wrap items-center gap-6">
        <Link to="/" className="hover:text-gray-300">
          Home
        </Link>

        <Link to="/wishlist" className="hover:text-gray-300">
          Wishlist ({wishlistCount})
        </Link>

        <Link to="/cart" className="hover:text-gray-300">
          Cart ({cartCount})
        </Link>

        <a href="#" className="hover:text-gray-300">
          Login
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
