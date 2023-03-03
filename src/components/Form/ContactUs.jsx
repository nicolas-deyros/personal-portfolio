import { useRef } from 'react'
import { useFormik } from 'formik'
import emailjs, { send } from '@emailjs/browser'
import { BasicSchema } from '../../schemas/index.jsx'
import { GoMention, GoPencil } from 'react-icons/go'
import { MdPerson } from 'react-icons/md'

const ContactUs = () => {
	const from = useRef()
	const initialValues = {
		name: '',
		email: '',
		msg: '',
	}

	const sendEmail = value => {
		emailjs
			.send('service_r5lhb2j', 'template_30fomqt', value, '5jtzri5zyzJcWEw-T')
			.catch(error => console.log(error))
	}

	const handleSubmit = async (value, onSubmittingProps, e) => {
		// console.log(onSubmittingProps)
		try {
			// await sendEmail(value)
			// console.log(value)
			await setTimeout(() => {
				sendEmail(value)
			}, 3000)

			onSubmittingProps.resetForm()
		} catch (error) {
			console.error(error)
		}
	}

	const formik = useFormik({
		initialValues,
		onSubmit: handleSubmit,
		validationSchema: BasicSchema,
	})

	// console.log(formik.errors)

	return (
		<div className="w-2/3">
			<form
				ref={from}
				className="flex flex-col w-2/3 mx-auto gap-1"
				onSubmit={formik.handleSubmit}
				autoComplete="off">
				<label className="block text-gray-700 text-sm font-bold" htmlFor="name">
					Your Name
				</label>
				<div className="flex">
					<span
						className={
							formik.errors.email && formik.touched.email
								? 'inline-flex items-center px-3 text-sm text-red-900 bg-red-200 border border-r-0 border-red-300 rounded-l-md '
								: 'inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600'
						}>
						<MdPerson
							className={
								formik.errors.email && formik.touched.email
									? 'w-5 h-5 text-red-500'
									: 'w-5 h-5 text-gray-500'
							}
						/>
					</span>
					<input
						id="name"
						name="name"
						type="text"
						className={
							formik.errors.name && formik.touched.name
								? 'bg-red-200 border border-red-300 text-red-900 text-sm border-l-0 rounded-r-md focus:ring-red-500 focus:border-red-500 block w-full p-2.5  placeholder-gray-700'
								: 'bg-gray-50 border border-gray-300 text-gray-900 text-sm border-l-0 rounded-r-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  placeholder-gray-700'
						}
						placeholder="Your name goes here"
						value={formik.values.name}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
					/>
				</div>
				{formik.errors.name && formik.touched.name && (
					<span className="text-red-500 font-semibold text-sm">
						{formik.errors.name}
					</span>
				)}
				<label
					className="block text-gray-700 text-sm font-bold"
					htmlFor="email">
					Your Email
				</label>
				<div className="flex">
					<span
						className={
							formik.errors.email && formik.touched.email
								? 'inline-flex items-center px-3 text-sm text-red-900 bg-red-200 border border-r-0 border-red-300 rounded-l-md '
								: 'inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600'
						}>
						<GoMention
							className={
								formik.errors.email && formik.touched.email
									? 'w-5 h-5 text-red-500'
									: 'w-5 h-5 text-gray-500'
							}
						/>
					</span>
					<input
						id="email"
						name="email"
						type="email"
						className={
							formik.errors.email && formik.touched.email
								? 'bg-red-200 border border-red-300 text-red-900 text-sm border-l-0  rounded-r-md focus:ring-red-500 focus:border-red-500 block w-full p-2.5  placeholder-gray-700'
								: 'bg-gray-50 border border-gray-300 text-gray-900 text-sm border-l-0  rounded-r-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  placeholder-gray-700'
						}
						placeholder="Here goes your email"
						value={formik.values.email}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
					/>
				</div>
				{formik.errors.email && formik.touched.email && (
					<span className="text-red-500 font-semibold text-sm">
						{formik.errors.email}
					</span>
				)}
				<label className="block text-gray-700 text-sm font-bold" htmlFor="msg">
					Your Message
				</label>
				<div className="flex">
					<textarea
						id="msg"
						name="msg"
						type="text"
						className={
							formik.errors.name && formik.touched.name
								? 'bg-red-200 border border-red-300 text-red-900 text-sm border-r-0  rounded-l-md focus:ring-red-500 focus:border-red-500 block w-full p-2.5  placeholder-gray-700'
								: 'bg-gray-50 border border-gray-300 text-gray-900 text-sm border-r-0  rounded-l-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  placeholder-gray-700'
						}
						placeholder="What would you like to say"
						value={formik.values.msg}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
					/>
					<span
						className={
							formik.errors.email && formik.touched.email
								? 'inline-flex items-center px-3 text-sm text-red-900 bg-red-200 border border-l-0 border-red-300 rounded-r-md '
								: 'inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-l-0 border-gray-300 rounded-r-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600'
						}>
						<GoPencil
							className={
								formik.errors.email && formik.touched.email
									? 'w-5 h-5 text-red-500'
									: 'w-5 h-5 text-gray-500'
							}
						/>
					</span>
				</div>
				{formik.errors.msg && formik.touched.msg && (
					<span className="text-red-500 font-semibold text-sm">
						{formik.errors.msg}
					</span>
				)}
				<input
					type="submit"
					value="Send"
					disabled={formik.isSubmitting}
					className={
						formik.isSubmitting
							? 'opacity-50'
							: 'text-white w-1/3  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
					}
				/>
			</form>
		</div>
	)
}

export default ContactUs
