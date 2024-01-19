import { Hero } from "./_components/hero"
import { Location } from "./_components/location"

export const revalidate = 500

const Domestic = () => {
  return (
    <>
      <Hero />
      <Location />
    </>
  )
}

export default Domestic
