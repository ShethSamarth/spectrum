import Image from "next/image"

import { Map } from "./_components/map"
import { FormComponent } from "./_components/form"
import { Hero } from "./_components/hero"

export const revalidate = 500

const Contact = () => {
  return (
    <div className="relative">
      <Hero />
      <div className="py-10">
        <h1 className="text-xl sm:text-2xl font-semibold text-center">
          Spectrum Dyes and Chemicals Private Limited
        </h1>
        <p className="text-sm text-center">CIN: U24110MH1989PTC176088</p>
      </div>
      <FormComponent />
      <Map />
      <Image
        className="hidden md:block absolute bottom-0 left-0"
        src="/images/coorner-design-img.webp"
        width={250}
        height={250}
        alt=""
      />
    </div>
  )
}

export default Contact
