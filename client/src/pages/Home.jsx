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
            <ProductCard
              key={product.id}
              name={product.name}
              price={product.price}
              addToCart={() => addToCart(product)}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;
