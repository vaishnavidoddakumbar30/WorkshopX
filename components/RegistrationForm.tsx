'use client'

import { useState } from 'react'
import Ticket from '@/components/Ticket'

export default function RegistrationForm() {

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    college: '',
  })

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {

    e.preventDefault()
    setLoading(true)

    const form = e.currentTarget

    const formData = {
      name: (form.name as any).value,
      email: (form.email as any).value,
      college: (form.college as any).value,
    }

    try {

      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok && data.success) {

        setSuccess(true)

        setUserData(formData)

        form.reset()

      } else {
        alert(data.message || 'Registration failed')
      }

    } catch (error) {
      console.error(error)
      alert('Something went wrong')
    }

    setLoading(false)
  }

  return (
    <section id="register" className="py-24 px-6 w-full">

      <div className="max-w-2xl mx-auto">

        <h2 className="text-4xl md:text-5xl font-black text-center bg-gradient-to-r from-green-400 to-cyan-400 text-transparent bg-clip-text">
          Register Now
        </h2>

        <form
          onSubmit={handleSubmit}
          className="mt-16 bg-white/5 border border-cyan-500/20 backdrop-blur-xl rounded-3xl p-10 space-y-6"
        >

          <input
            name="name"
            type="text"
            placeholder="Full Name"
            required
            className="w-full p-4 rounded-xl bg-black/40 border border-white/10 outline-none focus:border-cyan-400"
          />

          <input
            name="email"
            type="email"
            placeholder="Email Address"
            required
            className="w-full p-4 rounded-xl bg-black/40 border border-white/10 outline-none focus:border-cyan-400"
          />

          <input
            name="college"
            type="text"
            placeholder="College Name"
            className="w-full p-4 rounded-xl bg-black/40 border border-white/10 outline-none focus:border-cyan-400"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-400 to-pink-500 text-black font-bold text-lg hover:scale-105 transition-all duration-300 disabled:opacity-50"
          >
            {loading ? 'Registering...' : 'Submit Registration'}
          </button>

          {success && (
            <div className="text-center text-green-400 font-bold text-lg">
              Registration Successful 🚀
            </div>
          )}

        </form>

        {/* Event Pass */}
        {success && (
          <Ticket
            name={userData.name}
            email={userData.email}
            college={userData.college}
          />
        )}

      </div>
    </section>
  )
}