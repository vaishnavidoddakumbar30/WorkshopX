'use client'

import { useState } from 'react'
import { Trash2, Search } from 'lucide-react'

export default function AdminPage() {

  const [search, setSearch] = useState('')

  // Mock data (later you can connect API)
  const users = [
    { id: 1, name: "Nikita Jain", email: "nikita@gmail.com", college: "AMC" },
    { id: 2, name: "Rahul Sharma", email: "rahul@gmail.com", college: "MIT" },
    { id: 3, name: "Ananya Rao", email: "ananya@gmail.com", college: "IIT" },
  ]

  const filtered = users.filter(user =>
    user.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-black text-white px-6 py-10">

      {/* Header */}
      <h1 className="text-4xl md:text-5xl font-black text-center bg-gradient-to-r from-cyan-400 to-pink-500 text-transparent bg-clip-text">
        Admin Dashboard 🚀
      </h1>

      {/* Search Bar */}
      <div className="mt-10 max-w-xl mx-auto flex items-center gap-2 bg-white/5 border border-cyan-500/20 rounded-xl p-3 backdrop-blur-xl">
        <Search className="text-cyan-400" />
        <input
          type="text"
          placeholder="Search users..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-transparent outline-none w-full text-white"
        />
      </div>

      {/* Stats */}
      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">

        <div className="p-6 rounded-2xl bg-white/5 border border-cyan-500/20 text-center">
          <h2 className="text-3xl font-bold text-cyan-400">{users.length}</h2>
          <p className="text-gray-400 mt-2">Total Registrations</p>
        </div>

        <div className="p-6 rounded-2xl bg-white/5 border border-pink-500/20 text-center">
          <h2 className="text-3xl font-bold text-pink-400">Active</h2>
          <p className="text-gray-400 mt-2">System Status</p>
        </div>

        <div className="p-6 rounded-2xl bg-white/5 border border-green-500/20 text-center">
          <h2 className="text-3xl font-bold text-green-400">Live</h2>
          <p className="text-gray-400 mt-2">Workshop Mode</p>
        </div>

      </div>

      {/* User List */}
      <div className="mt-12 max-w-5xl mx-auto space-y-4">

        {filtered.map((user) => (
          <div
            key={user.id}
            className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl flex flex-col md:flex-row md:items-center md:justify-between gap-4 hover:scale-[1.02] transition-all"
          >

            <div>
              <h3 className="text-xl font-bold">{user.name}</h3>
              <p className="text-gray-400 text-sm">{user.email}</p>
              <p className="text-gray-500 text-sm">{user.college}</p>
            </div>

            <button className="flex items-center gap-2 px-4 py-2 bg-red-500/20 text-red-400 rounded-xl hover:bg-red-500/40 transition">
              <Trash2 size={16} />
              Delete
            </button>

          </div>
        ))}

      </div>

    </div>
  )
}