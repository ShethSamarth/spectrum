import { ChevronRight } from "lucide-react"

import { Hero } from "./_components/hero"
import { Cards } from "./_components/cards"
import { Details } from "./_components/details"

export const revalidate = 500

const CSR = () => {
  return (
    <>
      <Hero />
      <div className="flex flex-col justify-center items-center mt-10 mb-5">
        <h6 className="text-lg font-semibold text-[#0579AA]">CSR</h6>
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold md:max-w-xl text-center">
          Standing Strong, Together
        </h1>
        <p className="max-w-3xl mx-3 sm:mx-auto my-5 text-sm sm:text-base text-center text-[#545454] font-semibold">
          As A Responsible Corporate Citizen, Spectrum Takes Pride In Giving
          Back To The Community In Meaningful Ways. Their CSR Initiatives Focus
          On Education, Healthcare, And Environment, Recognizing The Importance
          Of Holistic Development.
        </p>
      </div>
      <Details />
      <div className="flex flex-col max-w-4xl mx-10 lg:mx-auto my-10">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">
          Corporate Social Responsibility Policy
        </h1>
        <p className="my-5 text-sm text-[#545454] font-normal">
          At Spectrum, we are committed to making a difference in the
          communities where we live, work and do business. This commitment dates
          to the earliest years of our group and is a vital part of both our
          heritage and of who we are today. Spectrum has a rich history of
          corporate social responsibility, a history that has grown and evolved
          to meet the complexities of today&apos;s business world and the
          challenges of a global society. We are proud of our progress, but
          there is still much we can do.
          <br />
          <br />
          The Company strongly believes that corporate success and social
          welfare are inter dependent. CSR Policy of the Company has been
          formulated considering the statutory provisions and activities
          enumerated in Schedule VII of the Companies Act, 2013.
        </p>
      </div>
      <Cards />
      <div className="flex flex-col max-w-4xl mx-10 lg:mx-auto my-10">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold">
          The CSR Committee Comprises Of Following Members
        </h1>
        <ul className="text-sm space-y-3 py-3">
          <li className="flex items-start">
            <ChevronRight className="h-5 w-5 text-[#0579aa] shrink-0" />
            Shri Pramod Kumar Chaudhary, Chairman
          </li>
          <li className="flex items-start">
            <ChevronRight className="h-5 w-5 text-[#0579aa] shrink-0" />
            Shri Yogesh Gupta, Member
          </li>
          <li className="flex items-start">
            <ChevronRight className="h-5 w-5 text-[#0579aa] shrink-0" />
            Shri Avneep Bansal, Member
          </li>
          <li className="flex items-start">
            <ChevronRight className="h-5 w-5 text-[#0579aa] shrink-0" />
            Shri Akshat Chaudhary, Member
          </li>
        </ul>
      </div>
      <h1 className="text-xl max-w-4xl mx-10 lg:mx-auto my-10">
        The Board of Directors of the Company has approved projects / programmes
        / activities as enumerated under Schedule VII of the Companies Act, 2013
      </h1>
    </>
  )
}

export default CSR
