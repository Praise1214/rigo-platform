import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { sendEmail } from '@/lib/mailer'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { email } = body

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      )
    }

    // 1. Save subscriber to the database
    await prisma.subscriber.create({
      data: { email: email.trim().toLowerCase() },
    })

    // 2. Send thank you email to the subscriber
    await sendEmail({
      to: email,
      subject: 'Welcome to the RIGO Newsletter! 🌱',
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <title>Welcome to RIGO</title>
        </head>
        <body style="margin:0;padding:0;background-color:#f4f4f4;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f4f4;padding:40px 0;">
            <tr>
              <td align="center">
                <table width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff;border-radius:16px;overflow:hidden;max-width:600px;width:100%;">

                  <!-- Header -->
                  <tr>
                    <td style="background-color:#1C8E9C;padding:40px 40px 32px;text-align:center;">
                      <h1 style="margin:0;color:#ffffff;font-size:28px;font-weight:800;letter-spacing:0.05em;text-transform:uppercase;">
                        Rising Generation
                      </h1>
                    </td>
                  </tr>

                  <!-- Body -->
                  <tr>
                    <td style="padding:40px 40px 32px;">
                      <h2 style="margin:0 0 16px;color:#1a1a1a;font-size:22px;font-weight:700;">
                        You're in! Welcome aboard 🎉
                      </h2>
                      <p style="margin:0 0 16px;color:#444444;font-size:15px;line-height:1.7;">
                        Thank you for subscribing to the RIGO Newsletter. You're now part of a growing community of young Nigerians passionate about leadership, entrepreneurship, and civic change.
                      </p>
                      <p style="margin:0 0 24px;color:#444444;font-size:15px;line-height:1.7;">
                        Here's what you can expect in your inbox:
                      </p>

                      <!-- Bullet list -->
                      <table cellpadding="0" cellspacing="0" width="100%" style="margin-bottom:28px;">
                        <tr>
                          <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;">
                            <span style="color:#1C8E9C;font-weight:700;margin-right:10px;">→</span>
                            <span style="color:#444;font-size:14px;">Updates on our programs, YoungCEO, RG Careers, RIGO Learning & more</span>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;">
                            <span style="color:#1C8E9C;font-weight:700;margin-right:10px;">→</span>
                            <span style="color:#444;font-size:14px;">Impact stories from our volunteers and members across Nigeria</span>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;">
                            <span style="color:#1C8E9C;font-weight:700;margin-right:10px;">→</span>
                            <span style="color:#444;font-size:14px;">Upcoming events, opportunities, and community news</span>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding:10px 0;">
                            <span style="color:#1C8E9C;font-weight:700;margin-right:10px;">→</span>
                            <span style="color:#444;font-size:14px;">Resources to help you grow as a leader and changemaker</span>
                          </td>
                        </tr>
                      </table>

                      <!-- CTA Button -->
                      <table cellpadding="0" cellspacing="0" style="margin-bottom:32px;">
                        <tr>
                          <td style="border-radius:50px;background-color:#1C8E9C;">
                            <a href="https://risinggeneration.org"
                               style="display:inline-block;padding:14px 32px;color:#ffffff;font-size:14px;font-weight:700;text-decoration:none;letter-spacing:0.05em;border-radius:50px;">
                              Visit Our Website →
                            </a>
                          </td>
                        </tr>
                      </table>

                      <p style="margin:0;color:#888888;font-size:13px;line-height:1.6;">
                        If you didn't subscribe to this newsletter, you can safely ignore this email.
                      </p>
                    </td>
                  </tr>

                  <!-- Footer -->
                  <tr>
                    <td style="background-color:#f9f9f9;padding:24px 40px;border-top:1px solid #eeeeee;text-align:center;">
                      <p style="margin:0 0 4px;color:#aaaaaa;font-size:12px;">
                        © ${new Date().getFullYear()} Rising Generation (RIGO). All rights reserved.
                      </p>
                      <p style="margin:0;color:#aaaaaa;font-size:12px;">
                        Lagos, Nigeria
                      </p>
                    </td>
                  </tr>

                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
    })

    return NextResponse.json(
      { success: true },
      { status: 201 }
    )
  } catch (error: unknown) {
    // Duplicate email — already subscribed
    if (
      typeof error === 'object' &&
      error !== null &&
      'code' in error &&
      (error as { code: string }).code === 'P2002'
    ) {
      return NextResponse.json(
        { error: "You're already subscribed!" },
        { status: 409 }
      )
    }

    console.error('[POST /api/newsletter]', error)
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}
