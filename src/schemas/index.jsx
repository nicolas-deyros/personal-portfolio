import * as Yup from 'yup'

const emailRules = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

export const BasicSchema = Yup.object().shape({
	name: Yup.string()
		.min(2, 'Name must be at least 2 characters long')
		.max(50, 'Name must be no longer than 50 characters')
		.matches(/^[a-zA-Z ]+$/, 'Name must only contain letters and spaces')
		.required('Name is a required field'),
	email: Yup.string()
		.email('Please enter a valid email')
		.matches(emailRules, { message: 'You need to add a valid email', excludeEmptyString: true })
		.required('Email is a required field'),
	msg: Yup.string()
		.min(10, 'Message must be at least 10 characters long')
		.max(500, 'Message must be no longer than 500 characters')
		.matches(/^[\w\s]+$/, {
			message: 'Name must only contain letters and spaces',
			excludeEmptyString: true,
		})
		.required('Give a little context'),
})
