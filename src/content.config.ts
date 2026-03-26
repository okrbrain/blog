import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			// Transform string to Date object
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			author: z.string().default('OKR Brain'),
			intro: z.string(),
			category: z.string(),
			categorySlug: z.string(),
			featured: z.boolean().default(false),
			toc: z
				.array(
					z.object({
						id: z.string(),
						label: z.string(),
					}),
				)
				.default([]),
			practicalApplication: z.array(z.string()).default([]),
			productConnection: z.array(z.string()).default([]),
			relatedSlugs: z.array(z.string()).default([]),
			tags: z.array(z.string()).default([]),
			draft: z.boolean().default(false),
			heroImage: z.optional(image()),
		}),
});

export const collections = { blog };
