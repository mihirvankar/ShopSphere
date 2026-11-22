import { Link } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import ProductCard from "../components/ProductCard";

function Home({ products, addToCart }) {
  return (
    <>
      <HeroSection />

      <section className="bg-gray-50 px-8 py-12">
        <h1 className="mb-8 text-3xl font-bold">Our Products</h1>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <div key={product.id}>
              <ProductCard
                name={product.name}
                price={product.price}
                addToCart={() => addToCart(product)}
              />

              <Link
                to={`/product/${product.id}`}
                className="mt-3 block rounded-lg border border-slate-900 px-4 py-2 text-center font-medium text-slate-900 hover:bg-slate-100"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;
