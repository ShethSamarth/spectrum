"use client"

import Image from "next/image"
import { Carousel as Slider } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"

export const Carousel = () => {
  return (
    <Slider
      infiniteLoop
      showStatus={false}
      showThumbs={false}
      showArrows={false}
      emulateTouch
    >
      <div className="flex flex-col md:flex-row h-auto md:h-96 lg:h-[33vw]">
        <div className="bg-[#0579AA] text-white px-8 md:px-10 lg:px-20 py-10 md:py-14 xl:py-20 space-y-3 order-2 md:order-1 w-screen md:w-[50vw] shrink-0">
          <h1 className="text-2xl md:text-3xl lg:text-4xl text-left font-semibold md:font-bold">
            Bluesign® Approved
            <br />
            Products
          </h1>
          <p className="text-left text-sm md:text-base font-semibold leading-loose">
            Spectrum Offers A Range Of Products That Are Blue Sign Approved,
            Meeting The Highest Standards For Sustainability And Safety In The
            Textile Industry.
            <br />
            <br />
            <br />
            <br />
          </p>
        </div>
        <Image
          className="order-1 md:order-2 h-96 lg:h-[33vw] aspect-square object-cover w-screen md:w-[50vw]"
          src="/images/carousel-1.webp"
          height={1000}
          width={1000}
          alt=""
        />
      </div>
      <div className="flex flex-col md:flex-row h-auto md:h-96 lg:h-[33vw]">
        <div className="bg-[#0579AA] text-white px-8 md:px-10 lg:px-20 py-10 md:py-14 xl:py-20 space-y-3 order-2 md:order-1 w-screen md:w-[50vw] shrink-0">
          <h1 className="text-2xl md:text-3xl lg:text-4xl text-left font-semibold md:font-bold">
            Renewable Energy
            <br />
            Investment
          </h1>
          <p className="text-left text-sm md:text-base font-semibold leading-loose">
            The Company Has Made Significant Investments In Solar And Wind
            Energy, Ensuring That 100% Of Its Permissible Energy Consumption
            Comes From Renewable Sources.
            <br />
            <br />
            <br />
            <br />
          </p>
        </div>
        <Image
          className="order-1 md:order-2 h-96 lg:h-[33vw] aspect-square object-cover w-screen md:w-[50vw]"
          src="/images/carousel-2.webp"
          height={1000}
          width={1000}
          alt=""
        />
      </div>
      <div className="flex flex-col md:flex-row h-auto md:h-96 lg:h-[33vw]">
        <div className="bg-[#0579AA] text-white px-8 md:px-10 lg:px-20 py-10 md:py-14 xl:py-20 space-y-3 order-2 md:order-1 w-screen md:w-[50vw] shrink-0">
          <h1 className="text-2xl md:text-3xl lg:text-4xl text-left font-semibold md:font-bold">
            Waste Management
            <br />
            Collaboration
          </h1>
          <p className="text-left text-sm md:text-base font-semibold leading-loose">
            To Minimize Its Environmental Impact, Spectrum Has Collaborated With
            Cement Industries To Responsibly Manage The Solid Waste Generated
            During Wastewater Treatment. Through Recycling Efforts, 50% Of The
            Solid Waste Has Been Successfully Recycled.
          </p>
        </div>
        <Image
          className="order-1 md:order-2 h-96 lg:h-[33vw] aspect-square object-cover w-screen md:w-[50vw]"
          src="/images/carousel-3.webp"
          height={1000}
          width={1000}
          alt=""
        />
      </div>
    </Slider>
  )
}
