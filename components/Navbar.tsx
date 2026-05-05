'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {

  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-2xl bg-gradient-to-r from-black/40 via-purple-500/10 to-black/40 border-b border-cyan-500/20 shadow-[0_0_30px_rgba(0,255,255,0.2)]">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-2xl font-black bg-gradient-to-r from-cyan-400 to-pink-500 text-transparent bg-clip-text">
          WorkshopX
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-gray-300">
          <a href="#home" className="hover:text-cyan-400 transition">Home</a>
          <a href="#speakers" className="hover:text-pink-400 transition">Speakers</a>
          <a href="#agenda" className="hover:text-purple-400 transition">Agenda</a>
          <a href="#register" className="hover:text-green-400 transition">Register</a>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black/90 backdrop-blur-xl border-t border-cyan-500/20 px-6 py-6 flex flex-col gap-6 text-center text-gray-300">
          <a onClick={() => setOpen(false)} href="#home" className="hover:text-cyan-400">Home</a>
          <a onClick={() => setOpen(false)} href="#speakers" className="hover:text-pink-400">Speakers</a>
          <a onClick={() => setOpen(false)} href="#agenda" className="hover:text-purple-400">Agenda</a>
          <a onClick={() => setOpen(false)} href="#register" className="hover:text-green-400">Register</a>
        </div>
      )}

    </nav>
  )
}