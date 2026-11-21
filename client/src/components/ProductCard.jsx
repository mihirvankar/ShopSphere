import { useState } from "react";

function ProductCard(props) {
  const [count, setCount] = useState(0);

  function addToCart() {
    setCount(count + 1);
  }

  return (
    <div className="rounded-xl border bg-white p-5 shadow-sm">
      <h2 className="text-xl font-bold">{props.name}</h2>

      <p className="mt-2 text-green-700">Price: ₹{props.price}</p>

      <p className="mt-2">Added: {count}</p>

      <button
        onClick={addToCart}
        className="mt-4 rounded-lg bg-slate-900 px-4 py-2 text-white"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
