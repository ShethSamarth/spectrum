import Link from "next/link"
import { ChevronsRight } from "lucide-react"

export const Hero = () => {
  return (
    <section className="hero relative flex justify-center lg:justify-start items-center">
      <div className="absolute top-0 left-0 w-full h-full bg-black/20" />
      <div className="mx-0 lg:mx-72 2xl:ml-[20vw] my-24 z-10">
        <div className="bg-black/60 text-white px-10 py-14 max-w-xl">
          <h1 className="text-3xl font-bold leading-relaxed">
            Dyes that Inspire, Innovations that endure
          </h1>
          <p className="py-6">
            A leading manufacturer of Disperse Dyes and Reactive Dyes, we are as
            rooted and in harmony with nature as we are innovative and
            future-facing.
          </p>
          <Link
            href="/overview"
            className="flex items-center bg-[#0579AA] w-fit px-5 py-3 rounded-md mt-5 tracking-wider font-semibold group"
          >
            Read More
            <ChevronsRight className="h-5 w-5 ml-2 transition duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}
