import { z, defineCollection } from 'astro:content'
// 2. Define a schema for each collection you'd like to validate.
const blog = defineCollection({
	schema: z.object({
		title: z.string().max(60, 'For SEO provide a title of 60 caracter or less'),
		description: z
			.string()
			.max(160, 'For SEO provide a description of 160 caracter or less'),
		draft: z.boolean().default(false),
		category: z.string(),
		date: z.string().transform(str => new Date(str)),
		image: z.object({
			src: z.string(),
			alt: z.string(),
		}),
	}),
	author: z.string().default('Nicolás Deyros'),
})
// 3. Export a single `collections` object to register your collection(s)
export const collections = {
	blog,
}
