import { useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ProductCard from "./components/ProductCard";

function App() {
  const [cart, setCart] = useState([]);

  const products = [
    { id: 1, name: "iPhone", price: 70000 },
    { id: 2, name: "Keyboard", price: 1500 },
    { id: 3, name: "Headphones", price: 2000 },
    { id: 4, name: "Laptop", price: 55000 },
  ];

  function addToCart(product) {
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  }

  function increaseQuantity(id) {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  }

  function decreaseQuantity(id) {
    setCart(
      cart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
        )
        .filter((item) => item.quantity > 0),
    );
  }

  function removeFromCart(id) {
    setCart(cart.filter((item) => item.id !== id));
  }

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  return (
    <>
      <Navbar cartCount={cartCount} />

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

      <section className="bg-white px-8 py-12">
        <h1 className="mb-6 text-3xl font-bold">Shopping Cart</h1>

        {cart.length === 0 ? (
          <p className="text-gray-500">Your cart is empty.</p>
        ) : (
          <div className="space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex flex-wrap items-center justify-between gap-4 rounded-lg border p-4"
              >
                <div>
                  <h2 className="font-bold">{item.name}</h2>
                  <p>
                    ₹{item.price} × {item.quantity}
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    className="rounded bg-gray-200 px-3 py-1"
                  >
                    -
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    onClick={() => increaseQuantity(item.id)}
                    className="rounded bg-gray-200 px-3 py-1"
                  >
                    +
                  </button>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="rounded bg-red-600 px-3 py-1 text-white"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}

            <h2 className="pt-4 text-2xl font-bold">
              Total: ₹{totalPrice.toLocaleString("en-IN")}
            </h2>
          </div>
        )}
      </section>
    </>
  );
}

export default App;
