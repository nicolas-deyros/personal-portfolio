import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import image from '@astrojs/image'
import prefetch from '@astrojs/prefetch'
import mdx from '@astrojs/mdx'
import vercel from '@astrojs/vercel/serverless'
import react from '@astrojs/react'
import partytown from '@astrojs/partytown'

// https://astro.build/config
export default defineConfig({
	integrations: [
		tailwind(),
		image({
			serviceEntryPoint: '@astrojs/image/sharp',
		}),
		prefetch(),
		mdx(),
		react(),
		partytown({
			config: {
				forward: ['dataLayer.push'],
			},
		}),
	],
	output: 'server',
	adapter: vercel({
		analytics: true,
	}),
})
