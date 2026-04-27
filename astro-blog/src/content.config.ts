import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    updated: z.string().optional(),
    image: z.string(),
    articleType: z.enum(['guide', 'comparison', 'review', 'legal', 'news', 'other']).default('guide'),
    category: z.string(),
    tags: z.array(z.string()).default([]),
    author: z.string().default('فريق سعودي فيب'),
    authorUrl: z.string().default('https://saudivapes.com/ar/blog/author/1210468642'),
    slug: z.string(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
