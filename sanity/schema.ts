import { type SchemaTypeDefinition } from "sanity"

import annualReturns from "./schemas/annual-returns"

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [annualReturns],
}
