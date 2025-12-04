import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    enHome: defineCollection({
      type: 'page',
      source: 'en/home/**/*.md',
      schema: z.object({
        title: z.string(),
        subtitle: z.string().optional(),
        order: z.number().optional(),
      })
    }),
    kaHome: defineCollection({
      type: 'page',
      source: 'ka/home/**/*.md',
      schema: z.object({
        title: z.string(),
        subtitle: z.string().optional(),
        order: z.number().optional(),
      })
    })
  }
})

