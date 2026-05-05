import { connectDB } from '@/lib/mongodb'
import Registration from '@/models/Registration'
import { NextResponse } from 'next/server'

export async function GET() {
  await connectDB()

  const users = await Registration.find().limit(10)

  return NextResponse.json(users)
}