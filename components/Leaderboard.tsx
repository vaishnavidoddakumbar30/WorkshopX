'use client'

import { useEffect, useState } from 'react'

export default function Leaderboard() {

  const [users, setUsers] = useState<any[]>([])

  useEffect(() => {
    fetch('/api/leaderboard')
      .then(res => res.json())
      .then(setUsers)
  }, [])

  return (
    <section className="py-24 text-center">

        <h2 className="text-4xl font-black text-cyan-400">
            Top Attendees 🚀
        </h2>

        <div className="mt-10 space-y-4 max-w-md mx-auto">

         {users.length === 0 && (
            <p className="text-gray-400">No users yet</p>
        )}

        {users.map((user, i) => (
            <div key={i} className="p-4 bg-white/5 rounded-xl border border-cyan-500/20">
          {i + 1}. {user.name}
        </div>
      ))}

    </div>

  </section>
    )
}