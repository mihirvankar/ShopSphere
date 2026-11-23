import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import ProductDetails from "./pages/ProductDetails";

function App() {
  const [cart, setCart] = useState([]);

  const products = [
    {
      id: 1,
      name: "iPhone",
      price: 70000,
      category: "Electronics",
      description:
        "Experience powerful performance, a premium design, and an advanced camera with this iPhone.",
    },
    {
      id: 2,
      name: "Keyboard",
      price: 1500,
      category: "Accessories",
      description:
        "A comfortable keyboard designed for everyday typing, study, and work.",
    },
    {
      id: 3,
      name: "Headphones",
      price: 2000,
      category: "Accessories",
      description:
        "Enjoy your favourite music with comfortable headphones and clear sound.",
    },
    {
      id: 4,
      name: "Laptop",
      price: 55000,
      category: "Electronics",
      description:
        "A versatile laptop for productivity, development, entertainment, and daily tasks.",
    },
  ];

  function addToCart(product) {
    setCart((currentCart) => {
      const existingProduct = currentCart.find(
        (item) => item.id === product.id,
      );

      if (existingProduct) {
        return currentCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }

      return [...currentCart, { ...product, quantity: 1 }];
    });
  }

  function increaseQuantity(id) {
    setCart((currentCart) =>
      currentCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  }

  function decreaseQuantity(id) {
    setCart((currentCart) =>
      currentCart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
        )
        .filter((item) => item.quantity > 0),
    );
  }

  function removeFromCart(id) {
    setCart((currentCart) => currentCart.filter((item) => item.id !== id));
  }

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <>
      <Navbar cartCount={cartCount} />

      <Routes>
        <Route
          path="/"
          element={<Home products={products} addToCart={addToCart} />}
        />

        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              increaseQuantity={increaseQuantity}
              decreaseQuantity={decreaseQuantity}
              removeFromCart={removeFromCart}
            />
          }
        />

        <Route
          path="/product/:id"
          element={<ProductDetails products={products} addToCart={addToCart} />}
        />

        <Route
          path="*"
          element={
            <div className="p-12 text-center">
              <h1 className="text-3xl font-bold">404 - Page Not Found</h1>
              <p className="mt-3 text-gray-600">
                The page you are looking for does not exist.
              </p>
            </div>
          }
        />
      </Routes>
    </>
  );
}

export default App;
