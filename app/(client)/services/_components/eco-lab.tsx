import Image from "next/image"

export const EcoLab = () => {
  return (
    <section className="max-w-5xl mx-5 my-5 md:my-10 lg:my-16 md:mx-auto flex flex-col md:flex-row">
      <div className="md:w-1/2 px-5 py-6">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
          Eco-Lab
        </h1>
        <div>
          <p className="py-2 md:py-4 text-sm font-normal tracking-wide leading-relaxed">
            Our ECO Lab grants our customers and partners access to essential
            eco-toxicological data associated with our product line. We ensure
            immediate access to the key information and features pertaining to
            our active product range:
          </p>
          <ul className="text-sm font-normal tracking-wide leading-relaxed list-disc">
            <li>
              Adherence to regulations, standards, RSLs (Restricted Substance
              List), and similar requirements
            </li>
            <li>Safety Data Sheet</li>
            <li>
              Expert Notes regarding specific regulations, standards, RSLs, etc.
            </li>
            <li>
              Frequently Asked Questions (FAQs) regarding regulations,
              standards, RSLs, etc.
            </li>
          </ul>
        </div>
      </div>
      <div className="md:w-1/2 p-6 relative">
        <div className="absolute hidden lg:block lg:h-52 lg:w-52 bg-[#B2D5E5] -bottom-3 right-5 -z-10" />
        <Image
          src="/images/eco-lab.webp"
          width={800}
          height={800}
          alt="Eco Lab"
          className="max-w-96 mx-auto h-64 w-64 sm:h-full sm:w-auto object-cover"
        />
      </div>
    </section>
  )
}
