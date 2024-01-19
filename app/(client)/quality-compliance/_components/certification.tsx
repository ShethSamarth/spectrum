import Image from "next/image"

export const Certification = () => {
  return (
    <section className="py-10">
      <h1 className="text-4xl font-semibold text-center">Certification</h1>
      <div className="max-w-4xl w-fit mx-auto my-10 grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-5 lg:gap-8">
        <Image
          className="mx-auto w-auto h-40 sm:h-44 lg:h-52 aspect-square md:aspect-video object-contain rounded-lg shadow-md"
          src="/images/cert-sm-04.png"
          width={1000}
          height={1000}
          alt=""
        />
        <Image
          className="mx-auto w-auto h-40 sm:h-44 lg:h-52 aspect-square md:aspect-video object-contain rounded-lg shadow-md"
          src="/images/cert-sm-05.png"
          width={1000}
          height={1000}
          alt=""
        />
        <Image
          className="mx-auto w-auto h-40 sm:h-44 lg:h-52 aspect-square md:aspect-video object-contain rounded-lg shadow-md"
          src="/images/cert-sm-06.png"
          width={1000}
          height={1000}
          alt=""
        />
        <Image
          className="mx-auto w-auto h-40 sm:h-44 lg:h-52 aspect-square md:aspect-video object-contain rounded-lg shadow-md"
          src="/images/cert-sm-01.png"
          width={1000}
          height={1000}
          alt=""
        />
        <Image
          className="mx-auto w-auto h-40 sm:h-44 lg:h-52 aspect-square md:aspect-video object-contain rounded-lg shadow-md"
          src="/images/cert-sm-02.png"
          width={1000}
          height={1000}
          alt=""
        />
        <Image
          className="mx-auto w-auto h-40 sm:h-44 lg:h-52 aspect-square md:aspect-video object-contain rounded-lg shadow-md"
          src="/images/cert-sm-03.png"
          width={1000}
          height={1000}
          alt=""
        />
      </div>
      <div className="flex flex-col justify-center items-center my-5">
        <h6 className="text-lg font-semibold text-[#0579AA]">
          SUSTAINABILITY INITIATIVES
        </h6>
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold md:max-w-xl text-center">
          Building A Better Tomorrow
        </h1>
        <p className="max-w-2xl mx-3 sm:mx-auto my-5 text-sm sm:text-base text-center text-[#545454] font-semibold">
          At Spectrum Dyes And Chemicals Private Limited, The Company
          Prioritizes Sustainability In Every Aspect Of Its Operations. The
          Commitment To Sustainability Is Reflected In The Following Initiatives
        </p>
      </div>
    </section>
  )
}
