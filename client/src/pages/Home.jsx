import { useState } from "react";
import { Link } from "react-router-dom";

import HeroSection from "../components/HeroSection";
import ProductCard from "../components/ProductCard";

function Home({ products, addToCart }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    ...new Set(products.map((product) => product.category)),
  ];

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <HeroSection />

      <section className="bg-gray-50 px-8 py-12">
        <h1 className="mb-6 text-3xl font-bold">Our Products</h1>

        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          className="mb-6 w-full max-w-md rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-slate-900"
        />

        <div className="mb-8 flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-lg px-5 py-2 font-medium transition ${
                selectedCategory === category
                  ? "bg-slate-900 text-white"
                  : "border border-gray-300 bg-white text-slate-900 hover:bg-gray-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {filteredProducts.length === 0 ? (
          <div className="py-10 text-center">
            <h2 className="text-xl font-semibold">No products found</h2>
            <p className="mt-2 text-gray-500">
              Try another search or category.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {filteredProducts.map((product) => (
              <div key={product.id}>
                <ProductCard
                  name={product.name}
                  price={product.price}
                  addToCart={() => addToCart(product)}
                />

                <p className="mt-2 text-sm text-gray-500">
                  Category: {product.category}
                </p>

                <Link
                  to={`/product/${product.id}`}
                  className="mt-3 block rounded-lg border border-slate-900 px-4 py-2 text-center font-medium text-slate-900 hover:bg-slate-100"
                >
                  View Details
                </Link>
              </div>
            ))}
          </div>
        )}
      </section>
    </>
  );
}

export default Home;
