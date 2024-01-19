import Image from "next/image"
import { content } from "./application-content"
import { MoveRight } from "lucide-react"

export const Application = () => {
  return (
    <section className="max-w-4xl mx-10 lg:mx-auto my-10">
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">
        Application
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 my-10">
        {content.map((item) => (
          <div key={item.title} className="relative">
            <p className="absolute bottom-5 mx-5 text-white text-xl font-semibold z-10">
              {item.title} <br /> <MoveRight className="w-5 h-5 mt-2" />
            </p>
            <div className="absolute top-0 left-0 h-full w-full bg-black/20" />
            <Image src={item.img} width={500} height={800} alt={item.title} />
          </div>
        ))}
      </div>
    </section>
  )
}
