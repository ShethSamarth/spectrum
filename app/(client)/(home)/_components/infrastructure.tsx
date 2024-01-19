import Image from "next/image"

export const Infrastructure = () => {
  return (
    <section className="bg-[#F9F9F9] py-5 sm:py-8 md:py-12 lg:py-16">
      <div className="flex flex-col justify-center items-center">
        <h6 className="text-lg font-semibold text-[#0579AA]">
          OUR INFRASTRUCTURE
        </h6>
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold md:max-w-xl text-center">
          Featuring Our Avant-Garde Manufacturing Setup
        </h1>
        <p className="py-8 text-xs font-light md:max-w-2xl text-center mx-2">
          Spectrum has fortified its manufacturing facilities by, outfitting
          them with cutting-edge technology and skilled labour, to manufacture
          tailor made solutions to meet the requirement of its clients.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 max-w-5xl mx-10 lg:mx-auto my-10">
        <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left">
          <h4 className="text-2xl font-semibold">1 strategically located</h4>
          <p className="pt-2 pb-10 text-sm">
            manufacturing facility spread across 1,35,000 Sq Mt.
          </p>
          <h4 className="text-2xl font-semibold">One of the largest</h4>
          <p className="pt-2 pb-10 text-sm">
            Disperse Dyes manufacturing site in India with 23 dedicated plants
            at a single site.
          </p>
        </div>
        <Image
          src="/images/our-infra-img.webp"
          width={800}
          height={2000}
          alt=""
          className="h-96 w-auto object-contain mx-auto"
        />
        <div className="flex flex-col justify-center items-center md:items-end text-center md:text-right pt-10">
          <h4 className="text-2xl font-semibold">Backward integrated</h4>
          <p className="pt-2 pb-10 text-sm">
            with in-house manufacturing of Crude Dyes, Intermediates and
            Dispersing Agents
          </p>
          <h4 className="text-2xl font-semibold">In-house ERP</h4>
          <p className="pt-2 pb-10 text-sm">
            streamlining operations and driving efficiency throughout the
            manufacturing process
          </p>
        </div>
      </div>
    </section>
  )
}
