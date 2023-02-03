export function slugify(text) {
	console.log(text)
	// return text
	// 	.toString()
	// 	.toLowerCase()
	// 	.replace(/\s+/g, '-')
	// 	.replace(/[^\w-]+/g, '')
	// 	.replace(/--+/g, '-')
	// 	.replace(/^-+/, '')
	// 	.replace(/-+$/, '')
}

// export function slugify = (text: (string | number)[]): string => {
// 	const value = args.join(' ')

// 	return value
// 		.normalize('NFD') // split an accented letter in the base letter and the acent
// 		.replace(/[\u0300-\u036f]/g, '') // remove all previously split accents
// 		.toLowerCase()
// 		.trim()
// 		.replace(/[^a-z0-9 ]/g, '') // remove all chars not letters, numbers and spaces (to be replaced)
// 		.replace(/\s+/g, '-') // separator
// }

export function formatDate(date) {
	return new Date(date).toLocaleDateString('en-US', {
		timeZone: 'UTC',
	})
}

export function formatBlogPosts(
	posts,
	{
		filterOutDrafts = true,
		filterOutFuturePosts = true,
		sortByDate = true,
		limit = undefined,
	} = {},
) {
	const filteredPosts = posts.reduce((acc, post) => {
		const { date, draft } = post.data
		// filterOutDrafts if true
		if (filterOutDrafts && draft) return acc

		// filterOutFuturePosts if true
		if (filterOutFuturePosts && new Date(date) > new Date()) return acc

		// add post to acc
		acc.push(post)

		return acc
	}, [])

	// sortByDate or randomize
	if (sortByDate) {
		filteredPosts.sort((a, b) => new Date(b.data.date) - new Date(a.data.date))
	} else {
		filteredPosts.sort(() => Math.random() - 0.5)
	}

	// limit if number is passed
	if (typeof limit === 'number') {
		return filteredPosts.slice(0, limit)
	}
	return filteredPosts
}
