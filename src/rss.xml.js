import rss from '@astrojs/rss'

export const get = () =>
	rss({
		title: 'Nicolas Deyros| Blog',
		description: 'Nicolas Deyros | Personal Portfolio',
		site: 'https://ndeyros.vercel.app/',
		items: import.meta.glob('./**/*.mdx'),
		customData: `<language>en-us</language>`,
	})
