'use client'

import { useEffect, useState } from 'react'

export default function TerminalIntro({ onFinish }: any) {

  const lines = [
    "Initializing WorkshopX...",
    "Loading AI Modules...",
    "Securing Network...",
    "Launching Experience 🚀"
  ]

  const [displayed, setDisplayed] = useState<string[]>([])

  useEffect(() => {
    let i = 0

    const interval = setInterval(() => {
      setDisplayed(prev => [...prev, lines[i]])
      i++

      if (i === lines.length) {
        clearInterval(interval)
        setTimeout(onFinish, 1500)
      }
    }, 800)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 bg-black text-green-400 font-mono flex flex-col justify-center items-center z-[999]">

      {displayed.map((line, index) => (
        <p key={index} className="mb-2">{line}</p>
      ))}

    </div>
  )
}