import Image from "next/image"

export const EnsuringQuality = () => {
  return (
    <section className="bg-[#F9FAFC] py-5 sm:py-8 md:py-12 lg:py-16">
      <div className="flex flex-col md:flex-row md:items-center max-w-4xl mx-5 lg:mx-auto">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold min-w-96">
          Ensuring Quality Every Step Of The Way
        </h1>
        <h6 className="text-sm font-light">
          Spectrum has modern and fully equipped Analytical, Quality Control,
          and Application Laboratory to ensure the high quality of its products.
          The laboratory conduct relevant tests at every stage of the product
          life cycle, including raw materials, captive intermediates, press
          cakes, and final products.
        </h6>
      </div>
      <div className="relative max-w-4xl mx-auto flex flex-col md:flex-row justify-center items-center my-20">
        <div className="absolute hidden lg:block w-0 h-0 md:h-32 md:w-40 lg:h-44 lg:w-52 bg-[#B2D5E5] -bottom-10 -right-10 z-0" />
        <div className="max-w-[350px] sm:max-w-[500px] md:max-w-[450px] lg:max-w-[450px] z-20">
          <Image src="/images/infra-3.webp" width={800} height={800} alt="" />
        </div>
        <div className="max-w-[350px] sm:max-w-[500px] md:max-w-[450px] lg:max-w-[500px] bg-[#0579AA] text-white mt-5 md:mt-0 md:-ml-20 md:pl-32 pl-8 pr-8 py-8 space-y-5 z-10">
          <p className="list-item text-sm tracking-wide leading-relaxed">
            Spectrum&apos;s ECO Laboratory uses modern equipment and analytical
            methods for chemical analysis of trace impurities at ultra-low
            levels.
          </p>
          <p className="list-item text-sm tracking-wide leading-relaxed">
            The lab analyses restricted substances like COCs, CPs, AZOs, PAHs,
            Quinoline, Free Formaldehyde, Heavy Metals, and aids in designing
            products to meet the MRSL/RSL limits of regulations such as
            bluesign, ZDHC, EU REACH SVHC, Oeko-Tex Standard 100, California
            Prop 65, and VOC Directives.
          </p>
          <p className="list-item text-sm tracking-wide leading-relaxed">
            The lab has provided compliance letters for products complying with
            the RSL limits of popular brands like Inditex, AFIRM, H&M, M&S,
            Nike, and Decathlon.
          </p>
        </div>
      </div>
    </section>
  )
}
