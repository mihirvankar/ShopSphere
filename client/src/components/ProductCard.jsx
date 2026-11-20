function ProductCard(props) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
      <h2 className="text-xl font-bold text-gray-800">{props.name}</h2>

      <p className="mt-2 text-lg text-green-700">Price: ₹{props.price}</p>

      <button className="mt-4 rounded-lg bg-slate-900 px-4 py-2 text-white hover:bg-slate-700">
        View Product
      </button>
    </div>
  );
}

export default ProductCard;
