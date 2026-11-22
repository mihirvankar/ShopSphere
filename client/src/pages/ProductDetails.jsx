import { Link, useParams } from "react-router-dom";

function ProductDetails({ products, addToCart }) {
  const { id } = useParams();

  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <section className="p-12 text-center">
        <h1 className="text-3xl font-bold">Product Not Found</h1>
        <p className="mt-3 text-gray-600">This product does not exist.</p>
        <Link
          to="/"
          className="mt-5 inline-block rounded-lg bg-slate-900 px-5 py-2 text-white"
        >
          Back to Home
        </Link>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-gray-50 px-8 py-12">
      <div className="mx-auto max-w-3xl rounded-xl border bg-white p-8 shadow-sm">
        <p className="text-sm text-gray-500">Product ID: {product.id}</p>

        <h1 className="mt-3 text-3xl font-bold">{product.name}</h1>

        <p className="mt-4 text-2xl font-semibold text-green-700">
          ₹{product.price.toLocaleString("en-IN")}
        </p>

        <p className="mt-5 leading-7 text-gray-600">{product.description}</p>

        <div className="mt-8 flex flex-wrap gap-4">
          <button
            onClick={() => addToCart(product)}
            className="rounded-lg bg-slate-900 px-6 py-3 text-white hover:bg-slate-700"
          >
            Add to Cart
          </button>

          <Link
            to="/"
            className="rounded-lg border border-slate-900 px-6 py-3 text-slate-900 hover:bg-gray-100"
          >
            Back to Products
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;
