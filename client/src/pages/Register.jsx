import { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    setMessage("");
    setError("");

    if (password.length < 8) {
      setError("Password must contain at least 8 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setMessage(
      "Form validated! Account creation will be connected in the backend phase.",
    );
  }

  return (
    <section className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12">
      <div className="w-full max-w-md rounded-2xl border bg-white p-8 shadow-sm">
        <h1 className="text-center text-3xl font-bold">Create Account</h1>

        <p className="mt-2 text-center text-gray-500">
          Join the ShopSphere marketplace
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <div>
            <label className="mb-2 block font-medium">Full Name</label>
            <input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Enter your full name"
              required
              className="w-full rounded-lg border px-4 py-3 outline-none focus:border-slate-900"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium">Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
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
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Minimum 8 characters"
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

          <div>
            <label className="mb-2 block font-medium">Confirm Password</label>
            <input
              type={showPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
              placeholder="Re-enter your password"
              required
              className="w-full rounded-lg border px-4 py-3 outline-none focus:border-slate-900"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-slate-900 py-3 font-semibold text-white hover:bg-slate-700"
          >
            Create Account
          </button>
        </form>

        {error && (
          <p className="mt-5 rounded-lg bg-red-50 p-3 text-center text-sm text-red-700">
            {error}
          </p>
        )}

        {message && (
          <p className="mt-5 rounded-lg bg-green-50 p-3 text-center text-sm text-green-700">
            {message}
          </p>
        )}

        <p className="mt-6 text-center text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="font-semibold text-slate-900 underline">
            Login
          </Link>
        </p>
      </div>
    </section>
  );
}

export default Register;
