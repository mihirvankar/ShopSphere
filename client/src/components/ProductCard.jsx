function ProductCard(props) {
  return (
    <div className="rounded-xl border bg-white p-5 shadow-sm">
      <h2 className="text-xl font-bold">{props.name}</h2>

      <p className="mt-2 text-green-700">Price: ₹{props.price}</p>

      <button
        onClick={props.addToCart}
        className="mt-4 rounded-lg bg-slate-900 px-4 py-2 text-white hover:bg-slate-700"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
