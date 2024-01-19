import Image from "next/image"

export const Details = () => {
  return (
    <section className="max-w-4xl mx-10 md:mx-auto my-10 grid grid-cols-1 md:grid-cols-2">
      <Image
        className="h-80 lg:h-96 w-full object-cover order-1"
        src="/images/csr-img1.webp"
        width={800}
        height={1000}
        alt=""
      />
      <div className="bg-[#E6F2F7] px-10 py-10 md:py-0 flex flex-col justify-center items-center space-y-8 order-2">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-center">
          Education
        </h1>
        <p className="text-xs md:text-sm font-light text-center">
          Spectrum believes that education is the key to a prosperous future,
          and has undertaken initiatives to improve its quality for the
          community surrounding their plant. They provide scholarship schemes,
          enhance infrastructure, and equip students with learning amenities.
        </p>
      </div>
      <div className="bg-[#E6F2F7] px-10 py-10 md:py-0 flex flex-col justify-center items-center space-y-8 order-4 md:order-3">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-center">
          Healthcare
        </h1>
        <p className="text-xs md:text-sm font-light text-center">
          The Company is committed to healthcare, offering TB screenings and
          supplying essential medical infrastructure. In addition, it provides
          nutritional supplements to support the well-being of individuals in
          need. Recognizing the significance of accessible healthcare, Spectrum
          actively collaborates with health centres to ensure quality medical
          support for all.
        </p>
      </div>
      <Image
        className="h-80 lg:h-96 w-full object-cover order-3 md:order-4"
        src="/images/csr-img2.webp"
        width={800}
        height={1000}
        alt=""
      />
      <Image
        className="h-80 lg:h-96 w-full object-cover order-5"
        src="/images/csr-img3.webp"
        width={800}
        height={1000}
        alt=""
      />
      <div className="bg-[#E6F2F7] px-10 py-10 md:py-0 flex flex-col justify-center items-center space-y-8 order-6">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-center">
          Environment
        </h1>
        <p className="text-xs md:text-sm font-light text-center">
          Spectrum&apos;s unwavering commitment to environmental sustainability
          is evident through the implementation of over 20 rainwater harvesting
          systems. These systems have been instrumental in recharging
          groundwater levels in the surrounding villages.
        </p>
      </div>
    </section>
  )
}
