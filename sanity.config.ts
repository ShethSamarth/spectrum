import { defineConfig } from "sanity"
import { visionTool } from "@sanity/vision"
import { structureTool } from "sanity/structure"

import { schema } from "./sanity/schema"
import { apiVersion, dataset, projectId } from "./sanity/env"

export default defineConfig({
  basePath: "/admin",
  name: "spectrum-admin",
  title: "Spectrum Admin",
  projectId,
  dataset,
  schema,
  plugins: [structureTool(), visionTool({ defaultApiVersion: apiVersion })],
})
