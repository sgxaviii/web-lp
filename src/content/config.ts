// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';

const teamCollection = defineCollection({
  schema: z.object({
    draft: z.boolean(),
    name: z.string(),
    title: z.string(),
    avatar: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    publishDate: z.string().transform(str => new Date(str)),
  }),
});

const equipsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    nom: z.string(),
    categoria: z.string(),
    entrenador: z.string(),
    fotografies: z.array(z.string()).optional(),
    horaris: z.array(z.string()).optional(),
    partits: z.array(z.object({
      rival: z.string(),
      data: z.string(),
      hora: z.string(),
      pista: z.string(),
      local: z.boolean()
    })).optional()
  }),
});

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  'team': teamCollection,
  'equips': equipsCollection,
};