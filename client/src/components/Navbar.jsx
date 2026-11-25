import { Link } from "react-router-dom";

function Navbar({ cartCount, wishlistCount }) {
  return (
    <nav className="flex flex-wrap items-center justify-between gap-4 bg-slate-900 px-8 py-5 text-white">
      <Link to="/" className="text-2xl font-bold">
        ShopSphere
      </Link>

      <div className="flex flex-wrap items-center gap-5">
        <Link to="/" className="hover:text-gray-300">
          Home
        </Link>

        <Link to="/wishlist" className="hover:text-gray-300">
          Wishlist ({wishlistCount})
        </Link>

        <Link to="/cart" className="hover:text-gray-300">
          Cart ({cartCount})
        </Link>

        <Link to="/login" className="hover:text-gray-300">
          Login
        </Link>

        <Link
          to="/register"
          className="rounded-lg bg-white px-4 py-2 font-semibold text-slate-900 hover:bg-gray-200"
        >
          Register
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
