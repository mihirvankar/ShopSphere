import { Link } from "react-router-dom";

function Wishlist({ products, wishlist, toggleWishlist }) {
  const wishlistProducts = products.filter((product) =>
    wishlist.includes(product.id),
  );

  return (
    <section className="min-h-screen bg-gray-50 px-8 py-12">
      <h1 className="mb-8 text-3xl font-bold">My Wishlist ♥</h1>

      {wishlistProducts.length === 0 ? (
        <div className="rounded-xl bg-white p-10 text-center shadow-sm">
          <h2 className="text-xl font-semibold">Your wishlist is empty</h2>

          <p className="mt-2 text-gray-500">
            Save your favourite products to see them here.
          </p>

          <Link
            to="/"
            className="mt-5 inline-block rounded-lg bg-slate-900 px-6 py-3 text-white"
          >
            Explore Products
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {wishlistProducts.map((product) => (
            <div
              key={product.id}
              className="overflow-hidden rounded-xl border bg-white shadow-sm"
            >
              <img
                src={product.image}
                alt={product.name}
                className="h-52 w-full bg-gray-100 object-cover"
              />

              <div className="p-5">
                <h2 className="text-xl font-bold">{product.name}</h2>

                <p className="mt-2 font-semibold text-green-700">
                  ₹{product.price.toLocaleString("en-IN")}
                </p>

                <Link
                  to={`/product/${product.id}`}
                  className="mt-4 block rounded-lg bg-slate-900 px-4 py-2 text-center text-white"
                >
                  View Details
                </Link>

                <button
                  onClick={() => toggleWishlist(product.id)}
                  className="mt-3 w-full rounded-lg border border-red-500 px-4 py-2 text-red-600 hover:bg-red-50"
                >
                  Remove from Wishlist
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default Wishlist;
