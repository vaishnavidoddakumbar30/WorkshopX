'use client'

import { Scanner } from '@yudiel/react-qr-scanner'

export default function QRScanner() {

  return (
    <div className="flex justify-center mt-10">

      <div className="w-[300px] rounded-xl overflow-hidden border border-cyan-500/20">
        
        <Scanner
          onScan={(result: any) => {
            if (result && result.length > 0) {
              alert("Ticket Scanned: " + result[0]?.rawValue)
            }
          }}
          onError={(error: any) => {
            console.error("QR Error:", error)
          }}
          constraints={{
            facingMode: "environment",
          }}
        />

      </div>

    </div>
  )
}