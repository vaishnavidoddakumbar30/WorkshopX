'use client'

import { useRef, useState } from 'react'
import QRCode from 'react-qr-code'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

export default function Ticket({
  name,
  email,
  college,
}: {
  name: string
  email: string
  college: string
}) {

  const ticketRef = useRef<HTMLDivElement>(null)
  const [downloading, setDownloading] = useState(false)

  const downloadPDF = async () => {

    if (!ticketRef.current) return

    setDownloading(true)

    try {
      const canvas = await html2canvas(ticketRef.current, {
        scale: 2,
      })

      const imgData = canvas.toDataURL('image/png')

      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
      })

      const imgWidth = 190
      const imgHeight = (canvas.height * imgWidth) / canvas.width

      pdf.addImage(imgData, 'PNG', 10, 10, imgWidth, imgHeight)

      pdf.save('Workshop-Pass.pdf')

    } catch (error) {
      console.error(error)
      alert('Failed to download PDF')
    }

    setDownloading(false)
  }

  const qrValue = JSON.stringify({
    name,
    email,
    college,
    event: "WORKSHOP EVENT"
  })

  if (!name || !email) return null

  return (
    <div className="flex flex-col items-center mt-10">

      {/* Ticket */}
      <div
        ref={ticketRef}
        className="bg-white text-black p-8 rounded-3xl w-[350px] shadow-2xl text-center"
      >

        <h1 className="text-2xl font-black">
          EVENT PASS
        </h1>

        {/* QR */}
        <div className="mt-6 flex justify-center">
          <QRCode value={qrValue} size={160} />
        </div>

        {/* Info */}
        <div className="mt-6 space-y-2">
          <p className="font-bold text-lg">{name}</p>
          <p className="text-sm">{email}</p>
          <p className="text-sm">{college}</p>

        </div>

      </div>

      {/* Download Button */}
      <button
        onClick={downloadPDF}
        disabled={downloading}
        className="mt-6 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-pink-500 text-black font-bold hover:scale-105 transition-all duration-300 disabled:opacity-50"
      >
        {downloading ? 'Generating PDF...' : 'Download Pass'}
      </button>

    </div>
  )
}