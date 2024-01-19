import Image from "next/image"

export const InHouse = () => {
  return (
    <section className="relative max-w-5xl mx-5 my-5 md:mt-20 md:mb-32 md:mx-auto flex flex-col md:flex-row">
      <div className="md:relative md:w-1/2">
        <div className="absolute hidden lg:block lg:h-52 lg:w-52 bg-[#B2D5E5] -top-5 left-10 -z-10" />
        <Image
          src="/images/infra-2.webp"
          width={800}
          height={800}
          alt="Infrastructure"
          className="max-w-96 mx-auto h-64 w-64 sm:h-full sm:w-full object-contain"
        />
      </div>
      <div className="md:w-1/2 space-y-2 py-6 md:pl-5">
        <h6 className="text-xl font-semibold text-[#0579AA]">
          In-house R&D center
        </h6>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
          Innovating For The Future
        </h1>
        <p className="text-sm font-normal tracking-wide leading-relaxed pt-5">
          Strong investments in R&D to remain abreast with evolving trends and
          to propel the growth of the Company. The Company has an in -house R&D
          centre at its manufacturing facility in Palsana, focusing on process
          improvement (for existing products) and new process development for
          product additions
        </p>
      </div>
      <div className="flex md:absolute bg-white flex-col md:flex-row justify-center items-center space-y-3 md:space-y-0 md:space-x-10 lg:space-x-32 px-10 md:px-20 py-3 md:-bottom-14 md:right-0 md:shadow-md">
        <div className="space-y-3">
          <Image
            src="/images/process_opt.svg"
            width={80}
            height={80}
            alt=""
            className="mx-auto h-10 w-10 lg:h-14 lg:w-14"
          />
          <p className="text-[#545454] text-center">
            Process
            <br />
            Optimization
          </p>
        </div>
        <div className="space-y-3">
          <Image
            src="/images/process_dev.svg"
            width={80}
            height={80}
            alt=""
            className="mx-auto h-10 w-10 lg:h-14 lg:w-14"
          />
          <p className="text-[#545454] text-center">
            Process
            <br />
            Development
          </p>
        </div>
        <div className="space-y-3">
          <Image
            src="/images/product_dev.svg"
            width={80}
            height={80}
            alt=""
            className="mx-auto h-10 w-10 lg:h-14 lg:w-14"
          />
          <p className="text-[#545454] text-center">
            Product
            <br />
            Development
          </p>
        </div>
      </div>
    </section>
  )
}
