import Image from "next/image"

export const Overview = () => {
  return (
    <section className="max-w-5xl mx-5 my-5 md:my-10 lg:my-16 md:mx-auto flex flex-col md:flex-row">
      <div className="md:w-1/2 p-6 relative">
        <div className="absolute hidden lg:block lg:h-52 lg:w-52 bg-[#B2D5E5] -bottom-3 left-5 -z-10" />
        <Image
          src="/images/overview-img.webp"
          width={500}
          height={500}
          alt="Overview"
          className="max-w-96 mx-auto h-64 w-64 sm:h-full sm:w-full"
        />
      </div>
      <div className="md:w-1/2 space-y-2 py-6">
        <h3 className="text-xl font-semibold text-[#0579AA]">OVERVIEW</h3>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
          With A Visionary Management Team At The Helm
        </h1>
        <p className="py-4 md:py-8 text-xs font-normal tracking-wide leading-relaxed">
          SDCPL has honed its chemistry skills, technological prowess, and
          operational expertise to become a trusted partner for textile
          industries worldwide, delivering consistent and sustainable value for
          all its stakeholders.
        </p>
      </div>
    </section>
  )
}
