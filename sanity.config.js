import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { presentationTool } from "sanity/presentation"
import { schema } from './schemaTypes'
import { structure } from './structure'

export default defineConfig({
  name: 'default',
  title: 'weareenigma-studio',

  projectId: '50qeqv9l',
  dataset: 'production',
  schema,

  plugins: [
    structureTool({ structure }),
    visionTool(),
    presentationTool({
      previewUrl: {
        origin: "http://localhost:3000/",
        preview: "/",
        previewMode: {
          enable: "/api/draft-mode/enable",
        },
      },
    }),
  ],
})
