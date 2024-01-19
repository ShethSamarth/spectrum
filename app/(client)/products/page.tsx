import Image from "next/image"

import { Dyes } from "./_components/dyes"
import { Hero } from "../csr/_components/hero"
import { Application } from "./_components/application"

export const revalidate = 500

const Products = () => {
  return (
    <main>
      <Hero />
      <div className="flex flex-col max-w-4xl mx-10 lg:mx-auto mt-10">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">
          Textile - Explain - We Cater To Textiles
        </h1>
        <p className="mt-5 text-sm text-[#545454] font-normal">
          Spectrum Dyes and Chemicals stand as prominent suppliers in the
          textile industry. We have a broad product range which covers almost
          all fibers and quality specifications. We aid in cost reduction,
          minimizing lead times, and ensuring adherence to quality and eco
          specifications.
        </p>
      </div>
      <div className="flex flex-col max-w-4xl mx-10 lg:mx-auto mt-10">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">
          Process Of Dyeing
        </h1>
        <p className="my-5 text-sm text-[#545454] font-normal">
          Spectrum plays a pivotal role across the entire textile supply chain,
          offering specialized solutions for dyeing and printing.
        </p>
        <Image
          src="/images/process.jpg"
          width={1500}
          height={500}
          alt="Process"
          className="mt-8 mb-10"
        />
      </div>
      <div className="flex flex-col max-w-4xl mx-10 lg:mx-auto mt-10">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">
          Disperse & Reactive Dyes
        </h1>
        <p className="mt-5 text-sm text-[#545454] font-normal">
          We proudly offer a distinctive proposition in the form of Disperse
          Dyes and Reactive Dyes, catering to the diverse needs of the textile
          industry. Our Disperse Dyes, known for their excellent color fastness
          and versatility, are ideal for polyester and synthetic fibers,
          ensuring vibrant and long-lasting hues. On the other hand, our
          Reactive Dyes are designed for natural fibers, forming a strong
          chemical bond with the fabric to produce brilliant, color-rich
          results.
        </p>
      </div>
      <Dyes />
      <Application />
    </main>
  )
}

export default Products
