function ProductCard(props) {
  return (
    <div className="overflow-hidden rounded-xl border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="relative h-52 overflow-hidden bg-gray-100">
        <img
          src={props.image}
          alt={props.name}
          loading="lazy"
          className="h-full w-full object-cover transition duration-300 hover:scale-105"
        />

        <button
          onClick={props.onToggleWishlist}
          aria-label={
            props.isWishlisted ? "Remove from wishlist" : "Add to wishlist"
          }
          className={`absolute right-3 top-3 rounded-full px-3 py-2 text-xl shadow ${
            props.isWishlisted
              ? "bg-red-100 text-red-600"
              : "bg-white text-gray-600"
          }`}
        >
          {props.isWishlisted ? "♥" : "♡"}
        </button>
      </div>

      <div className="p-5">
        <h2 className="text-xl font-bold">{props.name}</h2>

        <p className="mt-2 text-lg font-semibold text-green-700">
          ₹{props.price.toLocaleString("en-IN")}
        </p>

        <button
          onClick={props.addToCart}
          className="mt-4 w-full rounded-lg bg-slate-900 px-4 py-2 text-white transition hover:bg-slate-700"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
