import Image from "next/image"

export const Location = () => {
  return (
    <section className="max-w-5xl mx-auto py-10 flex flex-col md:flex-row md:space-x-3 space-y-3">
      <Image
        src="/images/world_map.png"
        width={1000}
        height={1000}
        alt="World Map"
        className="max-w-2xl mx-auto w-[calc(100vw-50px)] md:w-[50vw] lg:w-full object-contain"
      />
      <table className="text-sm text-center m-5 sm:m-10">
        <tbody className="p-2">
          <tr>
            <td className="border w-40 py-2">Australia</td>
            <td className="border w-40 py-2">Nigeria</td>
          </tr>
          <tr>
            <td className="border w-40 py-2">Bangladesh</td>
            <td className="border w-40 py-2">Pakistan</td>
          </tr>
          <tr>
            <td className="border w-40 py-2">Brazil</td>
            <td className="border w-40 py-2">Peru</td>
          </tr>
          <tr>
            <td className="border w-40 py-2">China</td>
            <td className="border w-40 py-2">Singapore</td>
          </tr>
          <tr>
            <td className="border w-40 py-2">Egypt</td>
            <td className="border w-40 py-2">South Korea</td>
          </tr>
          <tr>
            <td className="border w-40 py-2">Guatemala</td>
            <td className="border w-40 py-2">Sri Lanka</td>
          </tr>
          <tr>
            <td className="border w-40 py-2">Honduras</td>
            <td className="border w-40 py-2">Taiwan</td>
          </tr>
          <tr>
            <td className="border w-40 py-2">India</td>
            <td className="border w-40 py-2">Thailand</td>
          </tr>
          <tr>
            <td className="border w-40 py-2">Indonesia</td>
            <td className="border w-40 py-2">Turkey</td>
          </tr>
          <tr>
            <td className="border w-40 py-2">Israel</td>
            <td className="border w-40 py-2">UAE</td>
          </tr>
          <tr>
            <td className="border w-40 py-2">Italy</td>
            <td className="border w-40 py-2">UK</td>
          </tr>
          <tr>
            <td className="border w-40 py-2">Malawi</td>
            <td className="border w-40 py-2">USA</td>
          </tr>
          <tr>
            <td className="border w-40 py-2">Malaysia</td>
            <td className="border w-40 py-2">Vietnam</td>
          </tr>
          <tr>
            <td className="border w-40 py-2">Morocco</td>
            <td className="border w-40 py-2">-</td>
          </tr>
        </tbody>
      </table>
    </section>
  )
}
