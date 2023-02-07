import { annotate } from 'https://unpkg.com/rough-notation?module'

const e = document.querySelector('h1')
const annotation = annotate(e, { type: 'underline' })
annotation.show()
