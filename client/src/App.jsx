import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ProductCard from "./components/ProductCard";

function App() {
  const products = [
    { id: 1, name: "iPhone", price: 70000 },
    { id: 2, name: "Keyboard", price: 1500 },
    { id: 3, name: "Headphones", price: 2000 },
    { id: 4, name: "Laptop", price: 55000 },
  ];

  return (
    <>
      <Navbar />

      <HeroSection />

      <section className="bg-gray-50 px-8 py-12">
        <h1 className="mb-8 text-3xl font-bold text-gray-900">Our Products</h1>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              price={product.price}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default App;
