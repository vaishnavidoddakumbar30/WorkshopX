'use client'

import { useEffect, useState } from 'react'

export default function Countdown() {

  const target = new Date('2026-12-31').getTime()

  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {

    const interval = setInterval(() => {

      const now = new Date().getTime()

      const distance = target - now

      setTime({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((distance / 1000 / 60) % 60),
        seconds: Math.floor((distance / 1000) % 60),
      })

    }, 1000)

    return () => clearInterval(interval)

  }, [target])

  return (
    <div className="flex gap-6 justify-center mt-10 flex-wrap">

      {Object.entries(time).map(([label, value]) => (
        <div
          key={label}
          className="w-28 h-28 rounded-3xl bg-white/5 border border-cyan-500/20 backdrop-blur-xl flex flex-col items-center justify-center"
        >
          <h2 className="text-3xl font-black text-cyan-400">
            {value}
          </h2>

          <p className="capitalize text-gray-300">
            {label}
          </p>
        </div>
      ))}

    </div>
  )
}