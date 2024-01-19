import { Hero } from "./_components/hero"
import { Vision } from "./_components/vision"
import { Overview as OverviewComponent } from "./_components/overview"

export const revalidate = 500

const Overview = () => {
  return (
    <>
      <Hero />
      <OverviewComponent />
      <div className="bg-[#F6FAFC]">
        <Vision />
      </div>
    </>
  )
}

export default Overview
