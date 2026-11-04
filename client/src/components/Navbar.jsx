function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-slate-900 px-8 py-4 text-white">
      <h1 className="text-2xl font-bold">ShopSphere</h1>

      <div className="flex gap-6">
        <a href="#">Home</a>
        <a href="#">Products</a>
        <a href="#">Categories</a>
        <a href="#">Login</a>
      </div>
    </nav>
  );
}

export default Navbar;
