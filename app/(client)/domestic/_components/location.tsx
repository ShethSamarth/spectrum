import Image from "next/image"

export const Location = () => {
  return (
    <section className="max-w-5xl mx-auto py-10 flex flex-col lg:flex-row items-center md:space-x-3 space-y-5">
      <div className="max-w-[calc(100vw-50px)] sm:max-w-xl space-y-5">
        <table className="text-sm text-center w-full">
          <thead className="p-2">
            <tr>
              <th className="border w-40 py-2 bg-[#E6F2F7]">Jammu & Kashmir</th>
              <th className="border w-40 py-2 bg-[#E6F2F7]">
                Himachal Pradesh
              </th>
            </tr>
          </thead>
          <tbody className="p-2">
            <tr>
              <td className="border w-40 py-2">Kathua</td>
              <td className="border w-40 py-2">Baddi</td>
            </tr>
          </tbody>
          <thead className="p-2">
            <tr>
              <th className="border w-40 py-2 bg-[#E6F2F7]">Punjab</th>
              <th className="border w-40 py-2 bg-[#E6F2F7]">Haryana</th>
            </tr>
          </thead>
          <tbody className="p-2">
            <tr>
              <td className="border w-40 py-2">Ludhiana</td>
              <td className="border w-40 py-2">Delhi</td>
            </tr>
            <tr>
              <td className="border w-40 py-2">Amritsar</td>
              <td className="border w-40 py-2">Panipat</td>
            </tr>
            <tr>
              <td className="border w-40 py-2">-</td>
              <td className="border w-40 py-2">Bhiwani</td>
            </tr>
          </tbody>
          <thead className="p-2">
            <tr>
              <th className="border w-40 py-2 bg-[#E6F2F7]">Uttar Pradesh</th>
              <th className="border w-40 py-2 bg-[#E6F2F7]">Tamil Nadu</th>
            </tr>
          </thead>
          <tbody className="p-2">
            <tr>
              <td className="border w-40 py-2">Mathura</td>
              <td className="border w-40 py-2">Salem</td>
            </tr>
            <tr>
              <td className="border w-40 py-2">Ghaziabad</td>
              <td className="border w-40 py-2">Erode</td>
            </tr>
            <tr>
              <td className="border w-40 py-2">Gorakhpur</td>
              <td className="border w-40 py-2">Tirupur</td>
            </tr>
            <tr>
              <td className="border w-40 py-2">Kanpur</td>
              <td className="border w-40 py-2">-</td>
            </tr>
          </tbody>
        </table>
        <table className="text-sm text-center w-full">
          <thead className="p-2">
            <tr>
              <th className="border w-40 py-2 bg-[#E6F2F7]">Telangana</th>
              <th className="border w-40 py-2 bg-[#E6F2F7]">West Bengal</th>
            </tr>
          </thead>
          <tbody className="p-2">
            <tr>
              <td className="border w-40 py-2">Hyderabad</td>
              <td className="border w-40 py-2">Kolkata</td>
            </tr>
          </tbody>
        </table>
      </div>
      <Image
        src="/images/india-map.webp"
        width={500}
        height={500}
        alt="India Map"
        className="max-w-sm mx-auto object-contain"
      />
      <div className="max-w-[calc(100vw-50px)] sm:max-w-xl space-y-5">
        <table className="text-sm text-center w-full">
          <thead className="p-2">
            <tr>
              <th className="border w-40 py-2 bg-[#E6F2F7]">Rajasthan</th>
              <th className="border w-40 py-2 bg-[#E6F2F7]">Gujarat</th>
            </tr>
          </thead>
          <tbody className="p-2">
            <tr>
              <td className="border w-40 py-2">Banswara</td>
              <td className="border w-40 py-2">Surat</td>
            </tr>
            <tr>
              <td className="border w-40 py-2">Balotra</td>
              <td className="border w-40 py-2">Ahmedabad</td>
            </tr>
            <tr>
              <td className="border w-40 py-2">Udaipur</td>
              <td className="border w-40 py-2">Jetpur</td>
            </tr>
            <tr>
              <td className="border w-40 py-2">Bhilwara</td>
              <td className="border w-40 py-2">Ankleshwar</td>
            </tr>
            <tr>
              <td className="border w-40 py-2">Pali-Marwar</td>
              <td className="border w-40 py-2">Kim</td>
            </tr>
          </tbody>
        </table>
        <table className="text-sm text-center w-full">
          <thead className="p-2">
            <tr>
              <th className="border w-40 py-2 bg-[#E6F2F7]">Maharashtra</th>
            </tr>
          </thead>
          <tbody className="p-2">
            <tr>
              <td className="border w-40 py-2">Mumbai</td>
            </tr>
            <tr>
              <td className="border w-40 py-2">Ichalkaranji</td>
            </tr>
            <tr>
              <td className="border w-40 py-2">Bhiwandi</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  )
}
