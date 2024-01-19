import Image from "next/image"

export const Color = () => {
  return (
    <section className="max-w-5xl mx-5 my-5 md:my-10 lg:my-16 md:mx-auto flex flex-col md:flex-row">
      <div className="md:w-1/2 px-5 py-6">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
          Color Matching
        </h1>
        <div>
          <p className="py-2 md:py-4 text-sm font-normal tracking-wide leading-relaxed">
            At Spectrum, we recognize the importance of meeting your specialized
            color requirements, which is why we provide tailor-made color
            matching services. Our team excels at creating precise shades across
            various fabrics, ensuring that even the most stringent color
            standards are met. We understand the time-sensitive nature of your
            projects and the need to meet production deadlines. All you need to
            do is provide us with your desired design target for color matching,
            and we will diligently work until we achieve a precise match that
            meets your specifications. Ultimately, you will receive a
            one-of-a-kind Engineered Color, which results in the highest level
            of product consistency. In addition to this, our Design Tools are
            available to support designers throughout their creative process,
            aiding in the presentation, promotion, and development of their
            seasonal color palettes.
          </p>
          <h6 className="font-semibold">
            Spectrum&apos;s Engineered Color Standards offer the following
            benefits:
          </h6>
          <ul className="text-sm font-normal tracking-wide leading-relaxed list-disc">
            <li>Streamline the color approval process</li>
            <li>Provide mills with a realistic and achievable color target</li>
            <li>Minimize color discrepancies in coordinated products</li>
            <li>Reduce the need for compromises during color approvals</li>
            <li>
              Ensure a high level of consistency from one swatch to another.
            </li>
          </ul>
        </div>
      </div>
      <div className="md:w-1/2 p-6 relative">
        <div className="absolute hidden lg:block lg:h-52 lg:w-52 bg-[#B2D5E5] -bottom-3 right-5 -z-10" />
        <Image
          src="/images/color-matching.webp"
          width={800}
          height={800}
          alt="Color Matching"
          className="max-w-96 mx-auto h-64 w-64 sm:h-full sm:w-auto object-cover"
        />
      </div>
    </section>
  )
}
