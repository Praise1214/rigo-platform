import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { fullName, email, phone, state, preferredRole, availability, message } = body

    // Validate required fields
    if (!fullName || !email || !phone || !state || !preferredRole || !availability) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const volunteer = await prisma.volunteer.create({
      data: {
        fullName,
        email,
        phone,
        state,
        preferredRole,
        availability,
        message: message || null,
      },
    })

    return NextResponse.json(
      { success: true, id: volunteer.id },
      { status: 201 }
    )
  } catch (error) {
    console.error('[POST /api/volunteers]', error)
    return NextResponse.json(
      { error: 'Failed to save volunteer application' },
      { status: 500 }
    )
  }
}
