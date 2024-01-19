import { Hero } from "./_components/hero"
import { Location } from "./_components/location"

export const revalidate = 500

const International = () => {
  return (
    <>
      <Hero />
      <Location />
    </>
  )
}

export default International
