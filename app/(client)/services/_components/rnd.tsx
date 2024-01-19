import Image from "next/image"

export const RND = () => {
  return (
    <section className="max-w-5xl mx-5 my-5 md:my-10 lg:my-16 md:mx-auto flex flex-col md:flex-row">
      <div className="md:w-1/2 p-6 relative order-2 md:order-1">
        <div className="absolute hidden lg:block lg:h-52 lg:w-52 bg-[#B2D5E5] -bottom-3 left-5 -z-10" />
        <Image
          src="/images/rnd.webp"
          width={800}
          height={800}
          alt="R & D"
          className="max-w-96 mx-auto h-64 w-64 sm:h-full sm:w-auto object-cover"
        />
      </div>
      <div className="md:w-1/2 px-5 py-6 order-1 md:order-2">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
          Testing Services
        </h1>
        <div>
          <p className="py-2 md:py-4 text-sm font-normal tracking-wide leading-relaxed">
            Our laboratory conducts analyses on dyes, chemicals, and fabrics in
            accordance with top-tier international standards, encompassing a
            range of test protocols:
          </p>
          <ul className="text-sm font-normal tracking-wide leading-relaxed list-disc">
            <li>Fabric Quality</li>
            <li>Color Fastness</li>
            <li>Functional Testing</li>
            <li>Chemical Analysis</li>
            <li>Ecological Assessment</li>
          </ul>
          <p className="py-2 md:py-4 text-sm font-normal tracking-wide leading-relaxed">
            We possess the proficiency to perform tests that align with the
            stringent requirements of major brands and retailers. Beyond
            testing, we actively support our customers in meeting buyer
            specifications by providing valuable suggestions, guidance, and
            training. Today, our laboratory represents an ideal fusion of
            sophistication and expertise, merging years of industry experience
            with cutting-edge technology and state-of-the-art equipment.
          </p>
        </div>
      </div>
    </section>
  )
}
