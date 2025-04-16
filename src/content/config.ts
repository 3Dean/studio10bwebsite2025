// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    category: z.string(),
    client: z.string(),
    year: z.string(),
    description: z.string(),
    challenge: z.string(),
    solution: z.string(),
    features: z.array(z.string()),
    mainImage: z.string(),
    galleryImages: z.array(z.string())
  })
});

export const collections = {
  'projects': projectsCollection
};