import Image from "next/image"

export const Dyes = () => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-10 lg:mx-auto my-10 md:my-14">
      <div className="bg-[#F6F6F6] px-8 py-10 flex flex-col justify-center items-center">
        <Image src="/images/icon01.png" width={55} height={55} alt="Icon" />
        <h4 className="text-xl text-center font-medium pt-3">
          DISPERSE FOR POLYSTER
        </h4>
        <p className="text-sm font-light py-3 text-center">
          Making a dyeing/printing process selection, followed by a product
          range selection, leads you to individual dyestuff information.
        </p>
      </div>
      <div className="bg-[#F6F6F6] px-8 py-10 flex flex-col justify-center items-center">
        <Image src="/images/icon02.png" width={55} height={55} alt="Icon" />
        <h4 className="text-xl text-center font-medium pt-3">
          REACTIVE FOR CELLULOSE
        </h4>
        <p className="text-sm font-light py-3 text-center">
          From fiber to finish Archroma plays a key role throughout the entire
          textile supply chain, with special
        </p>
      </div>
    </section>
  )
}
