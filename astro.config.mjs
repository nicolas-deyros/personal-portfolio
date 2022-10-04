import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import prefetch from '@astrojs/prefetch'
import mdx from '@astrojs/mdx'
import image from '@astrojs/image'

import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind(), prefetch(), mdx(), image(), sitemap()],
	vite: {
		ssr: {
			external: ['svgo'],
		},
	},
})
