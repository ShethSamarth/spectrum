import Link from "next/link"
import { ChevronsRight } from "lucide-react"

export const ProductOfferings = () => {
  return (
    <section className="bg-[#F9F9F9] py-5 sm:py-8 md:py-12 lg:py-16">
      <div className="flex flex-col justify-center items-center">
        <h6 className="text-lg font-semibold text-[#0579AA]">
          PRODUCT OFFERINGS
        </h6>
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold md:max-w-xl text-center">
          Revolutionising The Industry With Our Offerings
        </h1>
      </div>
      <div className="relative max-w-5xl mx-auto flex flex-col md:flex-row justify-center items-center my-20">
        <div className="absolute hidden lg:block w-0 h-0 md:h-32 md:w-40 lg:h-44 lg:w-52 bg-[#B2D5E5] -top-10 left-0 z-0" />
        <div className="absolute hidden lg:block w-0 h-0 md:h-32 md:w-40 lg:h-44 lg:w-52 bg-[#B2D5E5] -bottom-10 right-0 z-0" />
        <div className="max-w-[350px] sm:max-w-[500px] md:max-w-[300px] lg:max-w-[450px] bg-[#0579AA] text-white px-8 py-12 z-10">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold z-10">
            Disperse Dyes
          </h2>
          <p className="py-8 text-sm tracking-wide leading-relaxed">
            Discover a world of vibrant and lasting color with our premium
            disperse dyes. Specially formulated for polyester, acetate, and
            nylon fibers, our disperse dyes ensure impeccable coloration that
            withstands time. Through cutting-edge technology, these dyes
            disperse seamlessly, creating rich and even shades that elevate
            textiles to new levels of brilliance. Explore a spectrum of
            possibilities with our high-quality disperse dyes, designed to
            infuse your fabrics with the hues that inspire.
          </p>

          <Link
            href="/disperse-dyes"
            className="flex items-center bg-white text-[#0579AA] w-fit px-5 py-3 rounded-md mt-5 tracking-wider font-semibold group"
          >
            Read More
            <ChevronsRight className="h-5 w-5 ml-2 transition duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
        <div className="max-w-[350px] sm:max-w-[500px] md:max-w-[300px] lg:max-w-[450px] bg-white text-primary px-8 py-12 z-10">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold">
            Reactive Dyes
          </h2>
          <p className="py-8 text-sm tracking-wide leading-relaxed">
            Discover the epitome of vibrant and lasting fabric color with our
            exquisite range of reactive dyes. Specially crafted to form a strong
            and enduring bond with fibers, these dyes bring to life a stunning
            palette of shades that resist fading over time. Experience the
            future of fabric dyeing with our reactive dyes. Unleash a world of
            brilliant, permanent color that bonds flawlessly with fibers,
            creating a masterpiece of shades that stand the test of time.
            Elevate your textiles today.
          </p>
          <Link
            href="/reactive-dyes"
            className="flex items-center bg-[#0579AA] text-white w-fit px-5 py-3 rounded-md mt-5 tracking-wider font-semibold group"
          >
            Read More
            <ChevronsRight className="h-5 w-5 ml-2 transition duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}
