import { EnsuringQuality } from "./_components/ensuring-quality"
import { Hero } from "./_components/hero"
import { InHouse } from "./_components/in-house"
import { OurInfra } from "./_components/our-infra"
import { Section2 } from "./_components/section2"

export const revalidate = 500

const Infrastructure = () => {
  return (
    <>
      <Hero />
      <OurInfra />
      <Section2 />
      <InHouse />
      <EnsuringQuality />
    </>
  )
}

export default Infrastructure
