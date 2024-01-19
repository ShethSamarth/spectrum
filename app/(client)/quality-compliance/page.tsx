import { Hero } from "./_components/hero"
import { Carousel } from "./_components/carousel"
import { Recognitions } from "./_components/recognitions"
import { Certification } from "./_components/certification"

export const revalidate = 500

const QualityCompliance = () => {
  return (
    <>
      <Hero />
      <Certification />
      <Carousel />
      <Recognitions />
    </>
  )
}

export default QualityCompliance
