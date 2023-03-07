import { useState } from 'react'
import { useFormik } from 'formik'
import emailjs, { send } from '@emailjs/browser'
import { BasicSchema } from '../../schemas/index.jsx'

const ContactUs = () => {
  const [formSubmit, FormSubmitting] = useState(false)
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
      FormSubmitting(true)
      onSubmittingProps.resetForm()
      await setTimeout(() => {
        FormSubmitting(false)
      }, 3000)
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
    <div className="w-full h-full flex flex-col items-center justify-center">
      {formSubmit ? (
        <h3 className="text-lg font-bold text-green-300">
          Thanks, I'll be in touch
        </h3>
      ) : (
        <h3 className="text-lg font-bold text-gray-500">
          Get in touch with me:
        </h3>
      )}

      {console.log('setSubmitting', formik.setSubmitting)}
      <form
        className="flex flex-col w-full md:w-2/3 mx-auto gap-1"
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
            <span
              className={
                formik.errors.email && formik.touched.email
                  ? 'w-5 h-5 text-red-500'
                  : 'w-5 h-5 text-gray-500'
              }>
              🧑
            </span>
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
            <span
              className={
                formik.errors.email && formik.touched.email
                  ? 'w-5 h-5 text-red-500'
                  : 'w-5 h-5 text-gray-500'
              }>
              @
            </span>
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
            <span
              className={
                formik.errors.email && formik.touched.email
                  ? 'w-5 h-5 text-red-500'
                  : 'w-5 h-5 text-gray-100'
              }>
              &#x270E;
            </span>
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
          disabled={formik.isSubmitting && !formik.isValid}
          className={
            formSubmit || !formik.isValid
              ? 'text-white w-1/3 md:w-1/5  bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center opacity-50'
              : 'text-white w-1/3 md:w-1/5  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center'
          }
        />
      </form>
    </div>
  )
}

export default ContactUs
