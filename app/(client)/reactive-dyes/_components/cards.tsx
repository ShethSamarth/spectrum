import { ChevronRight } from "lucide-react"

import { content } from "./cards-content"

export const Cards = () => {
  return (
    <section className="py-5 sm:py-8 md:py-12 lg:py-16">
      <div className="flex flex-col justify-center items-center">
        <h6 className="text-lg font-semibold text-[#0579AA]">
          PRODUCT OFFERINGS
        </h6>
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold md:max-w-xl text-center">
          Revolutionising The Industry With Our Offerings - Reactive Dyes
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-10 lg:mx-auto my-10 md:my-14">
        {content.map((data) => (
          <div key={data.title} className="bg-[#F6F6F6] px-5 py-5  rounded-md">
            <h4 className="text-xl font-semibold">{data.title}</h4>
            <ul className="space-y-3 py-3">
              {data.heads.map((head, i) => (
                <li key={i} className="font-semibold">
                  {head}
                </li>
              ))}
            </ul>
            <ul className="text-sm space-y-3 py-3">
              {data.points.map((point, i) => (
                <li key={i} className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-[#0579aa] shrink-0" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
