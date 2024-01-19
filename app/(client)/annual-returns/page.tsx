import { groq } from "next-sanity"
import { client } from "@/sanity/lib/client"

import { Table } from "./_components/table"
import { Hero } from "../csr/_components/hero"

export const revalidate = 0

const AnnualReturns = async () => {
  const query = groq`*[_type == "annualReturns"] {..., "fileUrl": file.asset->url} | order(_createdAt asc)`
  const data: Data[] = await client.fetch(query)

  return (
    <main>
      <Hero />
      <section className="max-w-4xl mx-10 lg:mx-auto my-10 space-y-3">
        <h1 className="text-3xl font-semibold">Annual Returns</h1>
        <Table data={data} />
      </section>
    </main>
  )
}

export default AnnualReturns
