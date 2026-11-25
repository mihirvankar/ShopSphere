import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    setMessage(
      "Form validated! Real login will be connected in the backend phase.",
    );
  }

  return (
    <section className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12">
      <div className="w-full max-w-md rounded-2xl border bg-white p-8 shadow-sm">
        <h1 className="text-center text-3xl font-bold">Welcome Back</h1>

        <p className="mt-2 text-center text-gray-500">
          Login to your ShopSphere account
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <div>
            <label className="mb-2 block font-medium">Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
                setMessage("");
              }}
              placeholder="Enter your email"
              required
              className="w-full rounded-lg border px-4 py-3 outline-none focus:border-slate-900"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium">Password</label>

            <div className="flex overflow-hidden rounded-lg border focus-within:border-slate-900">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                  setMessage("");
                }}
                placeholder="Enter your password"
                required
                className="w-full px-4 py-3 outline-none"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="px-4 text-sm font-medium text-slate-600"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-slate-900 py-3 font-semibold text-white hover:bg-slate-700"
          >
            Login
          </button>
        </form>

        {message && (
          <p className="mt-5 rounded-lg bg-green-50 p-3 text-center text-sm text-green-700">
            {message}
          </p>
        )}

        <p className="mt-6 text-center text-gray-600">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="font-semibold text-slate-900 underline"
          >
            Register
          </Link>
        </p>
      </div>
    </section>
  );
}

export default Login;
