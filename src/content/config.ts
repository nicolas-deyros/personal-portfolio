import { z, defineCollection } from 'astro:content'
// 2. Define a schema for each collection you'd like to validate.
const blogCollection = defineCollection({
	schema: z.object({
		title: z.string().max(60, 'For SEO provide a title of 60 caracter or less'),
		description: z
			.string()
			.max(160, 'For SEO provide a description of 160 caracter or less'),
		excerpt: z.string().optional(),
		isDraft: z.boolean().optional(),
		tags: z.array(z.string()),
		publishDate: z.string().transform(str => new Date(str)),
		updatedDate: z
			.string()
			.transform(str => new Date(str))
			.optional(),
		heroImage: z
			.object({
				src: z.string(),
				alt: z.string(),
			})
			.optional(),
	}),
	author: z.string().default('Nicolás Deyros'),
})
// 3. Export a single `collections` object to register your collection(s)
export const collections = {
	blog: blogCollection,
}
