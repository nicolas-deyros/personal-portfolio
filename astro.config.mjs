import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import image from '@astrojs/image'
import prefetch from '@astrojs/prefetch'
import mdx from '@astrojs/mdx'
import vercel from '@astrojs/vercel/serverless'
import react from '@astrojs/react'

export default defineConfig({
	integrations: [
		tailwind(),
		image({
			serviceEntryPoint: '@astrojs/image/sharp',
		}),
		prefetch(),
		mdx(),
		react(),
	],
	output: 'server',
	adapter: vercel({
		analytics: true,
	}),
})
