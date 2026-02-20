import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {
  PreviewThemeAction,
  GenerateColorVariationsAction,
  SyncToProductionAction,
} from './actions'

export default defineConfig({
  name: 'default',
  title: 'Diet AirDS',
  projectId: process.env.SANITY_STUDIO_PROJECT_ID || '',
  dataset: process.env.SANITY_STUDIO_DATASET || 'production',
  plugins: [
    structureTool(),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
  },
  document: {
    actions: (prev, context) => {
      // Add custom actions for team documents
      if (context.schemaType === 'team') {
        return [
          ...prev,
          PreviewThemeAction,
          GenerateColorVariationsAction,
          SyncToProductionAction,
        ]
      }
      return prev
    },
  },
})
