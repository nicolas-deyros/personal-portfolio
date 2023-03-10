import * as Yup from 'yup'

const emailRules =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

export const BasicSchema = Yup.object().shape({
  name: Yup.string()
    .min(4, 'Name must be at least 4 characters long')
    .max(50, 'Name must be no longer than 50 characters')
    .matches(/^[a-zA-Z ]+$/, 'Name must only contain letters and spaces')
    .required('Name is a required field and cannot be empty'),
  email: Yup.string()
    .email('Please enter a valid email')
    .matches(emailRules, {
      message: 'You need to add a valid email',
      excludeEmptyString: true,
    })
    .required('Email is a required field and cannot be empty'),
  msg: Yup.string()
    .min(10, 'Message must be at least 10 characters long')
    .max(500, 'Message must be no longer than 500 characters')
    .matches(/^[áéíóúÁÉÍÓÚñÑ\w\s\?\!\$\@\.\,]+$/, {
      message:
        'The message can only contain letters, spaces and the following characters (?!,.$@)',
      excludeEmptyString: true,
    })
    .required('Message cannot be empty. Please give a little context'),
})
