import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// POST /api/contact - Send contact form email
export async function POST(request) {
  const path = request.nextUrl.pathname

  if (path === '/api/contact') {
    try {
      const body = await request.json()
      const { name, email, phone, company, message } = body

      // Validate required fields
      if (!name || !email || !message) {
        return NextResponse.json(
          { error: 'Name, email, and message are required' },
          { status: 400 }
        )
      }

      // Email validation regex
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(email)) {
        return NextResponse.json(
          { error: 'Invalid email address' },
          { status: 400 }
        )
      }

      // Create transporter (user will add credentials later)
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST || 'smtp.gmail.com',
        port: parseInt(process.env.SMTP_PORT || '587'),
        secure: process.env.SMTP_SECURE === 'true',
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS
        }
      })

      // Check if SMTP credentials are configured
      if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
        console.log('Contact form submission (SMTP not configured):', { name, email, phone, company, message })
        return NextResponse.json(
          { 
            success: true, 
            message: 'Contact form submitted successfully. Email functionality will be enabled once SMTP credentials are configured.' 
          },
          { status: 200 }
        )
      }

      // Prepare email content
      const mailOptions = {
        from: process.env.SMTP_FROM || process.env.SMTP_USER,
        to: process.env.CONTACT_EMAIL || 'Bhavin.s@bsquareglobalfze.com,Mohan.b@bsquareglobalfze.com',
        subject: `New Contact Form Submission from ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #1e40af; border-bottom: 2px solid #1e40af; padding-bottom: 10px;">
              New Contact Form Submission
            </h2>
            <div style="margin: 20px 0;">
              <p><strong style="color: #475569;">Name:</strong> ${name}</p>
              <p><strong style="color: #475569;">Email:</strong> ${email}</p>
              ${phone ? `<p><strong style="color: #475569;">Phone:</strong> ${phone}</p>` : ''}
              ${company ? `<p><strong style="color: #475569;">Company:</strong> ${company}</p>` : ''}
            </div>
            <div style="margin: 20px 0; padding: 15px; background-color: #f1f5f9; border-left: 4px solid #1e40af;">
              <p><strong style="color: #475569;">Message:</strong></p>
              <p style="white-space: pre-wrap;">${message}</p>
            </div>
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0; color: #64748b; font-size: 12px;">
              <p>This email was sent from the B Square Global website contact form.</p>
            </div>
          </div>
        `,
        text: `
New Contact Form Submission

Name: ${name}
Email: ${email}
${phone ? `Phone: ${phone}\n` : ''}${company ? `Company: ${company}\n` : ''}

Message:
${message}

---
This email was sent from the B Square Global website contact form.
        `
      }

      // Send email
      await transporter.sendMail(mailOptions)

      return NextResponse.json(
        { success: true, message: 'Message sent successfully' },
        { status: 200 }
      )

    } catch (error) {
      console.error('Contact form error:', error)
      return NextResponse.json(
        { error: 'Failed to send message. Please try again later.' },
        { status: 500 }
      )
    }
  }

  return NextResponse.json(
    { error: 'Not found' },
    { status: 404 }
  )
}

// GET handler for health check
export async function GET(request) {
  return NextResponse.json(
    { status: 'ok', message: 'B Square Global API is running' },
    { status: 200 }
  )
}