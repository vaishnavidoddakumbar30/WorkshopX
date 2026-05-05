'use client'

import QRCode from 'react-qr-code'

interface Props {
  name?: string
  email?: string
}

export default function EventPass({ name, email }: Props) {

  if (!name || !email) return null

  const qrValue = JSON.stringify({
    name,
    email,
    event: "FUTURE WORKSHOP",
  })

  return (
    <div className="mt-12 w-full max-w-md mx-auto rounded-[40px] overflow-hidden border border-cyan-500/20 bg-white/5 backdrop-blur-2xl p-8 relative shadow-xl">

      {/* Glow Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10 pointer-events-none" />

      <div className="relative z-10 text-center">

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-black bg-gradient-to-r from-cyan-400 to-pink-500 text-transparent bg-clip-text">
          WORKSHOP EVENT PASS
        </h2>

        {/* User Info */}
        <p className="mt-4 text-lg md:text-xl text-white font-semibold">
          {name}
        </p>

        <p className="text-gray-400 mt-1 text-sm md:text-base">
          {email}
        </p>

        {/* QR Code */}
        <div className="bg-white p-4 rounded-2xl inline-block mt-8">
          <QRCode
            value={qrValue}
            size={160}
            bgColor="#ffffff"
            fgColor="#000000"
          />
        </div>

        {/* Footer */}
        <p className="mt-6 text-cyan-400 text-sm md:text-base">
          Scan this QR at entry gate
        </p>

      </div>
    </div>
  )
}