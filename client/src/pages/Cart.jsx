function Cart({ cart, increaseQuantity, decreaseQuantity, removeFromCart }) {
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  return (
    <section className="min-h-screen bg-gray-50 px-8 py-12">
      <h1 className="mb-8 text-3xl font-bold">Your Shopping Cart</h1>

      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex flex-wrap items-center justify-between gap-4 rounded-lg border bg-white p-5"
            >
              <div>
                <h2 className="text-xl font-bold">{item.name}</h2>
                <p className="mt-1 text-gray-600">
                  ₹{item.price.toLocaleString("en-IN")} × {item.quantity}
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

          <div className="border-t pt-5">
            <h2 className="text-2xl font-bold">
              Total: ₹{totalPrice.toLocaleString("en-IN")}
            </h2>
          </div>
        </div>
      )}
    </section>
  );
}

export default Cart;
