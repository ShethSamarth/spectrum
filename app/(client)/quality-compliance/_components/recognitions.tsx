import { content } from "./cards-content"

export const Recognitions = () => {
  return (
    <section className="py-5 sm:py-8 md:py-12">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold md:max-w-xl text-center">
          Recognitions That Inspire Us To Deliver More
        </h1>
      </div>
      <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-10 lg:mx-auto my-10 md:my-14">
        <div className="absolute hidden lg:block lg:h-52 lg:w-64 bg-[#B2D5E5] -top-5 -left-5 -z-10" />
        {content.map((data, i) => (
          <div
            key={i}
            className="px-5 py-5 space-y-3 bg-white border border-[#0579aa]/20 rounded-md"
          >
            <h4 className="text-xl font-semibold">{data.title}</h4>
            <p className="font-semibold text-[#545454]">({data.period})</p>
            <p className="font-semibold text-[#545454]">{data.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
