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

const processCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    projectTitle: z.string(),
    projectSlug: z.string(),
    summary: z.string(),
    description: z.string(),
    publishedDate: z.string(),
    stage: z.string(),
    coverImage: z.string(),
    coverImageAlt: z.string(),
    projectUrl: z.string().url().optional()
  })
});

export const collections = {
  'projects': projectsCollection,
  'process': processCollection
};
