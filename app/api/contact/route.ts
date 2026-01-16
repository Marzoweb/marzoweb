import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// In-memory rate limiting store
// ip -> { count, startTime }
const rateLimit = new Map<string, { count: number; startTime: number }>()

const LIMIT = 3 // Max requests
const WINDOW = 60 * 60 * 1000 // 1 hour

export async function POST(req: Request) {
  try {
    const ip = req.headers.get('x-forwarded-for') || 'unknown'
    const now = Date.now()
    const record = rateLimit.get(ip)

    // Clean up old records occasionally (simple optimization)
    if (Math.random() < 0.1) {
      for (const [key, value] of rateLimit.entries()) {
        if (now - value.startTime > WINDOW) {
          rateLimit.delete(key)
        }
      }
    }

    if (record) {
      if (now - record.startTime < WINDOW) {
        if (record.count >= LIMIT) {
          return NextResponse.json(
            { error: 'Rate limit exceeded. Please try again later.' },
            { status: 429 }
          )
        }
        record.count++
      } else {
        // Reset window
        rateLimit.set(ip, { count: 1, startTime: now })
      }
    } else {
      rateLimit.set(ip, { count: 1, startTime: now })
    }

    const { name, email, subject, message } = await req.json()

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD,
      },
    })

    // Styled HTML Email
    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: 'Arial', sans-serif; background-color: #f4f6f9; margin: 0; padding: 0; }
          .container { max-width: 600px; margin: 20px auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
          .header { background-color: #0056b3; color: #ffffff; padding: 20px; text-align: center; }
          .header h1 { margin: 0; font-size: 24px; font-weight: bold; }
          .content { padding: 30px; color: #333333; }
          .intro { font-size: 16px; margin-bottom: 20px; line-height: 1.6; }
          .details { width: 100%; border-collapse: collapse; margin-bottom: 20px; }
          .details td { padding: 12px; border-bottom: 1px solid #eeeeee; }
          .details td:first-child { font-weight: bold; width: 100px; color: #555555; }
          .message-box { background-color: #f8f9fa; border-left: 4px solid #0056b3; padding: 15px; border-radius: 4px; font-style: italic; }
          .footer { background-color: #f1f1f1; color: #888888; padding: 15px; text-align: center; font-size: 12px; }
          .highlight { color: #0056b3; font-weight: bold; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>New Inquiry Received</h1>
          </div>
          <div class="content">
            <p class="intro">
              Hello, <br>
              <span class="highlight">${name}</span> wants to send you a message. Their email is <a href="mailto:${email}">${email}</a>.
            </p>
            
            <table class="details">
              <tr>
                <td>Name</td>
                <td>${name}</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>${email}</td>
              </tr>
               <tr>
                <td>Subject</td>
                <td>${subject || 'No Subject'}</td>
              </tr>
            </table>

            <div class="message-box">
              "${message.replace(/\n/g, '<br>')}"
            </div>
          </div>
          <div class="footer">
            &copy; ${new Date().getFullYear()} MARZOWEB Agency. All rights reserved.
          </div>
        </div>
      </body>
      </html>
    `

    const mailOptions = {
      from: process.env.MAIL_USERNAME,
      to: 'marzowebagency@gmail.com',
      subject: `New Contact: ${subject || 'Website Inquiry'}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`, // Fallback
      html: htmlContent,
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json({ success: true, message: 'Email sent successfully' })
  } catch (error) {
    console.error('Email send error:', error)
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    )
  }
}