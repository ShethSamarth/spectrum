import Link from "next/link"
import Image from "next/image"
import { Mail, MapPinned, Phone } from "lucide-react"

import { Separator } from "@/components/ui/separator"

export const Footer = () => {
  const date = new Date()

  return (
    <footer>
      <section className="flex flex-col md:flex-row h-auto md:h-36 justify-center items-center space-y-4 md:space-y-0 space-x-0 md:space-x-8 lg:space-x-14 py-5 bg-[#E6F2F7]">
        <div className="flex flex-col justify-center items-center space-y-4 w-44">
          <MapPinned className="h-8 w-8" />
          <Link
            target="_blank"
            href="https://maps.app.goo.gl/3vM3DEWL864wJd1j6"
            className="text-sm"
          >
            Palsana, Surat, India
          </Link>
        </div>
        <Separator
          className="hidden md:flex bg-black w-[0.05rem]"
          orientation="vertical"
        />
        <div className="flex flex-col justify-center items-center space-y-4 w-44">
          <Mail className="h-8 w-8" />
          <Link
            target="_blank"
            href="mailto:info@spectrumdyes.com"
            className="text-sm"
          >
            info@spectrumdyes.com
          </Link>
        </div>
        <Separator
          className="hidden md:flex bg-black w-[0.05rem]"
          orientation="vertical"
        />
        <div className="flex flex-col justify-center items-center space-y-4 w-44">
          <Phone className="h-8 w-8" />
          <p className="text-sm flex flex-col">
            <Link href="tel:+919824407575">+91 98244 07575</Link>
            <Link href="tel:+919824589088">+91 98245 89088</Link>
          </p>
        </div>
      </section>
      <section className="bg-[#282828] flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center space-y-5 py-10">
          <Image
            src="/images/spectrum-logo-2.webp"
            width={170}
            height={80}
            alt="Logo"
          />
          <nav className="flex flex-wrap mx-10 justify-center align-middle items-center text-sm text-white">
            <Link href="/overview" className="mx-4 md:mx-6 my-2">
              About
            </Link>
            <Link href="/overview" className="mx-4 md:mx-6 my-2">
              Products
            </Link>
            <Link href="/overview" className="mx-4 md:mx-6 my-2">
              Services
            </Link>
            <Link href="/overview" className="mx-4 md:mx-6 my-2">
              Sustainability
            </Link>
            <Link href="/overview" className="mx-4 md:mx-6 my-2">
              Careers
            </Link>
            <Link href="/overview" className="mx-4 md:mx-6 my-2">
              Contact Us
            </Link>
          </nav>
        </div>
        <Separator className=" bg-[#929292]" />
        <p className="py-5 text-[#929292] text-xs tracking-tight">
          © {date.getFullYear()} Spectrum Dyes & Chemicals Pvt. Ltd.
        </p>
      </section>
    </footer>
  )
}
