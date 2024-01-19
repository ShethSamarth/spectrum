import { Hero } from "./_components/hero"
import { About } from "./_components/about"
import { ImageCard } from "./_components/image-card"
import { Infrastructure } from "./_components/infrastructure"
import { ProductOfferings } from "./_components/product-offerings"

export const revalidate = 500

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <ProductOfferings />
      <ImageCard />
      <Infrastructure />
    </>
  )
}

export default Home
