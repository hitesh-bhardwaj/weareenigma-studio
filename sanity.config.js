import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {presentationTool} from "sanity/presentation"
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'weareenigma-studio',

  projectId: '50qeqv9l',
  dataset: 'production',

  plugins: [
    structureTool(), 
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

  schema: {
    types: schemaTypes,
  },
})
