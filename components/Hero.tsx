'use client'

import Particles from './Particles'
import { motion } from 'framer-motion'
import Countdown from './Countdown'

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Particles */}
      <Particles />

      {/* Glow Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-pink-500/20 blur-3xl pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center px-6 max-w-4xl"
      >
        {/* Title */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-500 text-transparent bg-clip-text">
              FUTURE
          <br />
          WORKSHOP
        </h1>

        {/* Description */}
        <p className="mt-6 text-gray-300 text-base md:text-xl max-w-2xl mx-auto">
          Experience immersive workshops with futuristic UI,
          premium speakers, Interact with them .
        </p>

        {/* Countdown */}
        <Countdown />

        {/* CTA Button */}
        <a
          href="#register"
          className="inline-block mt-10 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-500 text-black font-bold text-lg hover:scale-110 transition-all duration-300 shadow-[0_0_40px_rgba(0,255,255,0.6)]"
        >
          Register Now
        </a>
      </motion.div>
    </section>
  )
}