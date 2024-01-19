export const Map = () => {
  return (
    <div className="w-[calc(100vw-100px)] md:w-[calc(100vw-200px)] lg:max-w-5xl h-auto aspect-video mx-auto my-10">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3722.427411493345!2d72.97352437503343!3d21.095519580570567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be05beea777c68b%3A0x3eb4417fe61db720!2sSpectrum%20Dyes%20and%20Chemicals%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1704455968194!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  )
}
