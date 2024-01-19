import { RND } from "./_components/rnd"
import { Hero } from "./_components/hero"
import { Color } from "./_components/color"
import { EcoLab } from "./_components/eco-lab"
import { Testing } from "./_components/testing"

export const revalidate = 500

const Services = () => {
  return (
    <>
      <Hero />
      <Color />
      <Testing />
      <EcoLab />
      <RND />
    </>
  )
}

export default Services
