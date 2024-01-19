import Image from "next/image"

export const About = () => {
  return (
    <>
      <section className="bg-[#E6F2F7] relative">
        <Image
          src="/images/coorner-design-img.webp"
          width={100}
          height={100}
          alt=""
          className="hidden md:block absolute bottom-0 left-0"
        />
        <div className="flex flex-col md:flex-row max-w-5xl py-5 mx-auto">
          <div className="flex max-w-lg mx-auto p-3 space-x-5">
            <Image
              src="/images/chemistry_img.svg"
              width={50}
              height={50}
              alt=""
              className="w-16 mx-3"
            />
            <div className="flex flex-col justify-start space-y-3">
              <p className="text-xl font-bold">30 Years</p>
              <p className="text-xs font-semibold">
                With a three-decade legacy, we excel in crafting innovative and
                top-tier quality dyes.
              </p>
            </div>
          </div>
          <div className="flex max-w-lg mx-auto p-3 space-x-5">
            <Image
              src="/images/team_member_img.svg"
              width={50}
              height={50}
              alt=""
              className="w-16 mx-3"
            />
            <div className="flex flex-col justify-start space-y-3">
              <p className="text-xl font-bold">1500+</p>
              <p className="text-xs font-semibold">
                Our skilled professionals prioritize integrity and consistently
                deliver exceptional value.
              </p>
            </div>
          </div>
          <div className="flex max-w-lg mx-auto p-3 space-x-5">
            <Image
              src="/images/value_img.svg"
              width={50}
              height={50}
              alt=""
              className="w-16 mx-3"
            />
            <div className="flex flex-col justify-start space-y-3">
              <p className="text-xl font-bold">Level 3</p>
              <p className="text-xs font-semibold">
                Certified in ZDHC Gateway, our bluesign® approved products are
                recognized for their environmental responsibility.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-5xl mx-auto flex flex-col md:flex-row justify-center items-center py-5 sm:py-8 md:py-12 lg:py-16">
        <Image
          src="/images/about-section.webp"
          width={500}
          height={500}
          alt="About"
          className="max-h-[500px] md:max-h-[400px] lg:max-h-[450px] 2xl:max-h-[550px] max-w-[350px] sm:max-w-[500px] md:max-w-[400px] lg:max-w-[450px] 2xl:max-w-[550px]"
        />
        <div className="relative max-h-[500px] max-w-[350px] sm:max-w-[500px] md:max-w-[300px] lg:max-w-[450px] ml-0 md:-ml-20 bg-[#0579AA] text-white mt-5 md:mt-0 p-4 md:p-6 lg:p-8">
          <h6 className="text-sm lg:text-lg font-semibold">ABOUT US</h6>
          <h2 className="text-2xl lg:text-3xl font-semibold leading-loose py-4">
            A Leading Manufacturer Of Disperse Dyes
          </h2>
          <p className="text-xs lg:text-sm tracking-wider leading-loose">
            Spectrum Dyes and Chemicals Private Limited (SDCPL) is a leading
            player in the Indian Dyes industry. With a legacy of over three
            decades, the Company has been spearheading the industry with its
            exceptional range of Disperse Dyes and Reactive Dyes.
          </p>
          <div className="absolute w-0 h-0 md:h-32 md:w-40 lg:h-44 lg:w-52 bg-[#B2D5E5] md:-bottom-5 md:-right-7 lg:-bottom-8 lg:-right-10 -z-10" />
        </div>
      </section>
    </>
  )
}
