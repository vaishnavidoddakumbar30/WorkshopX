import { connectDB } from '@/lib/mongodb'
import Registration from '@/models/Registration'
import { NextResponse } from 'next/server'

export async function GET() {
  await connectDB()
  const users = await Registration.find().sort({ createdAt: -1 })
  return NextResponse.json(users)
}

export async function DELETE(req: Request) {
  await connectDB()

  const { searchParams } = new URL(req.url)
  const id = searchParams.get('id')

  await Registration.findByIdAndDelete(id)

  return NextResponse.json({ success: true })
}