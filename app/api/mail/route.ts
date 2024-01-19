import { NextResponse } from "next/server"

import { mailer } from "@/lib/mailer"

export async function POST(req: Request) {
  const formdata = await req.formData()

  const name = formdata.get("name") as string
  const email = formdata.get("email") as string
  const mobile = formdata.get("mobile") as string
  const message = formdata.get("message") as string

  try {
    await mailer({ subject: "Contact Inquiry", name, email, mobile, message })
  } catch (error) {
    return new NextResponse("Error", { status: 400 })
  }

  return new NextResponse("Success", { status: 200 })
}
