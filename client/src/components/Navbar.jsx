function Navbar(props) {
  return (
    <nav className="flex items-center justify-between bg-slate-900 px-8 py-5 text-white">
      <h1 className="text-2xl font-bold">ShopSphere</h1>

      <div className="flex items-center gap-6">
        <a href="#">Home</a>
        <a href="#">Products</a>
        <a href="#">Categories</a>
        <a href="#">Login</a>

        <span className="rounded-lg bg-white px-4 py-2 font-semibold text-slate-900">
          Cart: {props.cartCount}
        </span>
      </div>
    </nav>
  );
}

export default Navbar;
