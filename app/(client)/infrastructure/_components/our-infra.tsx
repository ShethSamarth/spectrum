import Image from "next/image"

export const OurInfra = () => {
  return (
    <section className="max-w-5xl mx-5 my-5 md:my-10 lg:my-16 md:mx-auto flex flex-col md:flex-row">
      <div className="md:w-1/2 space-y-2 py-6 md:pl-5">
        <h6 className="text-xl font-semibold text-[#0579AA]">
          OUR INFRASTRUCTURE
        </h6>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
          Optimising Efficiency Through Streamlined Stock Management
        </h1>
        <p className="text-sm font-normal tracking-wide leading-relaxed pt-5">
          Spectrum Dyes and Chemicals Private Limited prides itself on its
          meticulously managed warehouse, where an extensive stock of both raw
          materials and finished goods are stored. With a keen focus on
          inventory management, Spectrum ensures stability in production and
          consistent delivery of high-quality products to its valued customers.
          Our state-of-the-art warehouse serves as the backbone of our
          operations, enabling us to meet market demands efficiently.
        </p>
      </div>
      <div className="md:w-1/2">
        <Image
          src="/images/infra-1.webp"
          width={800}
          height={800}
          alt="Infrastructure"
          className="max-w-96 mx-auto h-64 w-64 sm:h-full sm:w-full object-contain"
        />
      </div>
    </section>
  )
}
