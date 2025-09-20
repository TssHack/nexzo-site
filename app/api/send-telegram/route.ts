import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json()

    const botToken = "8168542187:AAFptGlkr89rq1czcbTyh13RhjyuKx87fjI"
    const chatId = "-1002980426809"

    const telegramMessage = `
🔔 پیام جدید از فرم تماس NEXZO TM

👤 نام: ${name}
📧 ایمیل: ${email}
📝 موضوع: ${subject}

💬 پیام:
${message}

⏰ زمان: ${new Date().toLocaleString("fa-IR")}
    `

    const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: telegramMessage,
        parse_mode: "HTML",
      }),
    })

    if (!response.ok) {
      throw new Error("Failed to send message to Telegram")
    }

    return NextResponse.json({ success: true, message: "پیام با موفقیت ارسال شد" })
  } catch (error) {
    console.error("Error sending message to Telegram:", error)
    return NextResponse.json({ success: false, message: "خطا در ارسال پیام" }, { status: 500 })
  }
}
