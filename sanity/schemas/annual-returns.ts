import { defineField, defineType } from "sanity"

export default defineType({
  name: "annualReturns",
  title: "Annual Returns",
  type: "document",
  fields: [
    defineField({
      name: "year",
      title: "Year",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "file",
      title: "File",
      type: "file",
    }),
  ],
})
