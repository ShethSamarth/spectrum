import { Check } from "lucide-react"
import Image from "next/image"

export const Vision = () => {
  return (
    <section className="max-w-5xl mx-5 py-5 md:py-10 lg:py-16 md:mx-auto">
      <div className="flex flex-col md:flex-row items-start md:items-center space-y-5 mx-5">
        <div className="md:w-1/3">
          <h3 className="text-xl font-semibold text-[#0579AA]">
            OUR VISION & MISSIONS
          </h3>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
            Delivering Quality
            <br /> At Scale
          </h1>
        </div>
        <p className="md:w-2/3 text-sm font-normal tracking-wide leading-relaxed">
          With more than 30 years of industry expertise, enhanced manufacturing
          capabilities, and unparalleled customer trust, SDCPL is geared up to
          leverage its strengths and steadfastly pursue its ambition of becoming
          the most reliable and preferred global manufacturer of Dyes.
        </p>
      </div>
      <div className="flex flex-col md:flex-row pt-8 md:space-x-5">
        <div className="md:w-1/2 p-6">
          <Image
            src="/images/our-vision-img.webp"
            width={800}
            height={800}
            alt="Overview"
            className="max-w-96 2xl:max-w-full mx-auto h-64 w-64 sm:h-full sm:w-full object-contain"
          />
        </div>
        <div className="max-w-xl mx-auto md:w-1/2 space-y-5 py-6">
          <div className="flex items-center space-x-5 bg-white px-4 py-3 shadow-md rounded-lg">
            <Check className="h-8 w-8 rounded-full text-white bg-green-500 p-1" />
            <div className="space-y-1">
              <h6 className="text-lg sm:text-xl">
                Manufacturing Infrastructure
              </h6>
              <p className="text-sm font-semibold">
                1,35,000 Sq Mt Of manufacturing landscape
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-5 bg-white px-4 py-3 shadow-md rounded-lg">
            <Check className="h-8 w-8 rounded-full text-white bg-green-500 p-1" />
            <div className="space-y-1">
              <h6 className="text-lg sm:text-xl">
                Length and Breadth of Operations
              </h6>
              <p className="text-sm font-semibold">2500+ Customer base</p>
            </div>
          </div>
          <div className="flex items-center space-x-5 bg-white px-4 py-3 shadow-md rounded-lg">
            <Check className="h-8 w-8 rounded-full text-white bg-green-500 p-1" />
            <div className="space-y-1">
              <h6 className="text-lg sm:text-xl">Offerings</h6>
              <p className="text-sm font-semibold">
                400+ Products in Disperse & Reactive Dyes
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
