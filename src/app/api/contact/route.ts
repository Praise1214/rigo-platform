import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const contactMessage = await prisma.contactMessage.create({
      data: {
        name,
        email,
        message,
      },
    })

    return NextResponse.json(
      { success: true, id: contactMessage.id },
      { status: 201 }
    )
  } catch (error) {
    console.error('[POST /api/contact]', error)
    return NextResponse.json(
      { error: 'Failed to save contact message' },
      { status: 500 }
    )
  }
}
