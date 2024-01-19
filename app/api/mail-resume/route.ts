import path from "path"
import { writeFile } from "fs/promises"
import { NextResponse } from "next/server"

import { mailer } from "@/lib/mailer"

export async function POST(req: Request) {
  const formdata = await req.formData()

  const name = formdata.get("name") as string
  const email = formdata.get("email") as string
  const mobile = formdata.get("mobile") as string
  const message = formdata.get("message") as string
  const file = formdata.get("file") as File

  const buffer = Buffer.from(await file.arrayBuffer())
  const filename = name.replace(" ", "_") + Date.now()

  try {
    await writeFile(
      path.join(process.cwd(), "public/resume/" + filename + ".pdf"),
      buffer
    )
    await mailer({
      subject: "Careers",
      name,
      email,
      mobile,
      message,
      resume: process.env.NEXT_PUBLIC_URL + "/resume/" + filename + ".pdf",
    })

    return new NextResponse("Success", { status: 200 })
  } catch (error) {
    console.log("Error", error)
    return NextResponse.json("Internal error", { status: 400 })
  }
}
