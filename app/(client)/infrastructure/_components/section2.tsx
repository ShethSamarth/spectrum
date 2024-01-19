export const Section2 = () => {
  return (
    <section className="bg-[#F9F9F9] text-[#545454] py-10 md:py-16">
      <div className="max-w-5xl mx-auto">
        <p className="max-w-3xl mx-5 sm:mx-auto font-light text-center">
          A dedicated team utilises advanced techniques and systems to monitor
          and maintain optimal stock levels, ensuring seamless production
          processes. By employing sophisticated inventory tracking mechanisms we
          effectively:
        </p>
        <div className="flex flex-col md:flex-row justify-between space-y-5 md:space-y-0 mt-10 text-center">
          <h4 className="bg-white text-[#8A8A8A] md:w-full mx-5 px-8 lg:px-14 py-8 text-2xl rounded-lg shadow-sm hover:shadow-xl transition-shadow duration-300 ease-in-out">
            Reduce Wastage
          </h4>
          <h4 className="bg-white text-[#8A8A8A] md:w-full mx-5 px-8 lg:px-14 py-8 text-2xl rounded-lg shadow-sm hover:shadow-xl transition-shadow duration-300 ease-in-out">
            Eliminate stockouts
          </h4>
          <h4 className="bg-white text-[#8A8A8A] md:w-full mx-5 px-8 lg:px-14 py-8 text-2xl rounded-lg shadow-sm hover:shadow-xl transition-shadow duration-300 ease-in-out">
            Minimise carrying costs
          </h4>
        </div>
      </div>
    </section>
  )
}
