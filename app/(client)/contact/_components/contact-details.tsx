import { Mail, MapPin, Phone } from "lucide-react"

export const ContactDetails = () => {
  return (
    <div className="lg:w-1/2 mx-auto lg:mx-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-5">
      <div className="flex space-x-4 items-center">
        <MapPin
          color="#0579AA"
          className="bg-[#E6F2F7] h-20 w-20 p-6 rounded-md shrink-0"
        />
        <div className="max-w-xs">
          <h6 className="text-lg font-semibold">Registered Office Address</h6>
          <p className="text-xs font-semibold">
            301, Acme Plaza, Andheri Kurla Road, Andheri (East), Mumbai City,
            Mumbai, Maharashtra - 400059, India
          </p>
        </div>
      </div>
      <div className="flex space-x-4 items-center">
        <MapPin
          color="#0579AA"
          className="bg-[#E6F2F7] h-20 w-20 p-6 rounded-md shrink-0"
        />
        <div className="max-w-xs">
          <h6 className="text-lg font-semibold">Factory Address</h6>
          <p className="text-xs font-semibold">
            Block Nos. 484, 502, 503A, 504, 505A, 481A, 483, National Highway
            No. 8, Palsana - 394315 Surat, Gujarat, India
          </p>
        </div>
      </div>
      <div className="flex space-x-4 items-center">
        <Mail
          color="#0579AA"
          className="bg-[#E6F2F7] h-20 w-20 p-6 rounded-md shrink-0"
        />
        <div className="max-w-xs">
          <h6 className="text-lg font-semibold">Email</h6>
          <p className="text-xs font-semibold">info@spectrumdyes.com</p>
        </div>
      </div>
      <div className="flex space-x-4 items-center">
        <Phone
          color="#0579AA"
          className="bg-[#E6F2F7] h-20 w-20 p-6 rounded-md shrink-0"
        />
        <div className="max-w-xs">
          <h6 className="text-lg font-semibold">Call</h6>
          <p className="text-xs font-semibold">
            +91 98244 07575, +91 98245 89088
          </p>
        </div>
      </div>
    </div>
  )
}
