import Link from "next/link"
import { ChevronsRight } from "lucide-react"

import { Hero } from "./_components/hero"
import { Cards } from "./_components/cards"

export const revalidate = 500

const DisperseDyes = () => {
  return (
    <main>
      <Hero />
      <Cards />
      <div className="flex justify-center items-center -mt-10 md:-mt-20 mb-10">
        <Link
          href="/contact"
          className="flex items-center bg-[#0579AA] text-white w-fit px-5 py-3 rounded-md mt-5 tracking-wider font-semibold group"
        >
          Inquiry Now
          <ChevronsRight className="h-5 w-5 ml-2 transition duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </main>
  )
}

export default DisperseDyes
