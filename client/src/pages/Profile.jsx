
import { useState } from "react"

function Profile() {
  const [name, setName] = useState("Mihir")
  const [email, setEmail] = useState("mihir@example.com")
  const [message, setMessage] = useState("")

  function handleSubmit(event) {
    event.preventDefault()
    setMessage("Profile updated successfully!")
  }

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-12">
      <div className="mx-auto max-w-2xl rounded-xl bg-white p-8 shadow">
        <h1 className="mb-2 text-3xl font-bold">My Profile</h1>
        <p className="mb-8 text-gray-500">
          Manage your personal account information.
        </p>

        <div className="mb-8 flex items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-900 text-2xl font-bold text-white">
            {name.charAt(0).toUpperCase()}
          </div>

          <div>
            <h2 className="text-xl font-semibold">{name}</h2>
            <p className="text-gray-500">{email}</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="mb-2 block font-medium">Full Name</label>
            <input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-slate-900"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium">Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-slate-900"
            />
          </div>

          <button
            type="submit"
            className="rounded-lg bg-slate-900 px-6 py-3 font-semibold text-white hover:bg-slate-700"
          >
            Save Changes
          </button>

          {message && (
            <p className="font-medium text-green-600">{message}</p>
          )}
        </form>
      </div>
    </div>
  )
}

export default Profile
