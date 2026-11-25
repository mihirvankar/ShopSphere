import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import ProductDetails from "./pages/ProductDetails";
import Wishlist from "./pages/Wishlist";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const products = [
    {
      id: 1,
      name: "iPhone",
      price: 70000,
      category: "Electronics",
      image:
        "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=600",
      description:
        "Experience powerful performance, a premium design, and an advanced camera with this iPhone.",
    },
    {
      id: 2,
      name: "Keyboard",
      price: 1500,
      category: "Accessories",
      image:
        "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600",
      description:
        "A comfortable keyboard designed for everyday typing, study, and work.",
    },
    {
      id: 3,
      name: "Headphones",
      price: 2000,
      category: "Accessories",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600",
      description:
        "Enjoy your favourite music with comfortable headphones and clear sound.",
    },
    {
      id: 4,
      name: "Laptop",
      price: 55000,
      category: "Electronics",
      image:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600",
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

  function toggleWishlist(productId) {
    setWishlist((currentWishlist) =>
      currentWishlist.includes(productId)
        ? currentWishlist.filter((id) => id !== productId)
        : [...currentWishlist, productId],
    );
  }

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <>
      <Navbar cartCount={cartCount} wishlistCount={wishlist.length} />

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/"
          element={
            <Home
              products={products}
              addToCart={addToCart}
              wishlist={wishlist}
              toggleWishlist={toggleWishlist}
            />
          }
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
          path="/wishlist"
          element={
            <Wishlist
              products={products}
              wishlist={wishlist}
              toggleWishlist={toggleWishlist}
            />
          }
        />

        <Route
          path="*"
          element={
            <div className="p-12 text-center">
              <h1 className="text-3xl font-bold">404 - Page Not Found</h1>
            </div>
          }
        />
      </Routes>
    </>
  );
}

export default App;
