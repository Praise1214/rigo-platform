import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { fullName, email, phone, state, occupation } = body

    // Validate required fields
    if (!fullName || !email || !phone || !state || !occupation) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const member = await prisma.member.create({
      data: {
        fullName,
        email,
        phone,
        state,
        occupation,
      },
    })

    return NextResponse.json(
      { success: true, id: member.id },
      { status: 201 }
    )
  } catch (error: unknown) {
    // Catch duplicate email (unique constraint on Member.email)
    if (
      typeof error === 'object' &&
      error !== null &&
      'code' in error &&
      (error as { code: string }).code === 'P2002'
    ) {
      return NextResponse.json(
        { error: 'This email is already registered as a member.' },
        { status: 409 }
      )
    }

    console.error('[POST /api/members]', error)
    return NextResponse.json(
      { error: 'Failed to save membership registration' },
      { status: 500 }
    )
  }
}
