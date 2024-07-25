import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {media} from 'sanity-plugin-media'
import {colorInput} from '@sanity/color-input'

export default defineConfig({
  name: 'default',
  title: 'Ligjet',

  projectId: 'aqpb3xj6',
  dataset: 'production',

  plugins: [structureTool(), visionTool({title: 'GROQ'}), media(), colorInput()],

  schema: {
    types: schemaTypes,
  },
})
