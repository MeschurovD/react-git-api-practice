export enum StatusValidation {
  TRUE,
  EMAIL_ERROR,
  PASSWORD_ERROR,
  EMAIL_AND_PASSWORD_ERROR
}

interface ValidateType {
  (
    email: string,
    password: string,
    passwordCheck?: string
  ): StatusType
}

interface StatusType {
  status: StatusValidation
  errorEmail: string
  errorPassword: string
}

const isValidate: ValidateType = (email, password, ...props) => {

  console.log('123');

  let validate: StatusType = {
    status: StatusValidation.TRUE,
    errorEmail: '',
    errorPassword: ''
  }

  //Проверка наличие email
  if (!email) {
    validate = {
      ...validate,
      status: StatusValidation.EMAIL_ERROR,
      errorEmail: !email ? 'Введите email' : '',
    }
  }

  //Проверка на наличие password
  if (!password) {
    validate = {
      status: validate.status === StatusValidation.EMAIL_ERROR
        ? StatusValidation.EMAIL_AND_PASSWORD_ERROR
        : StatusValidation.PASSWORD_ERROR,
      errorEmail: !email ? 'Введите email' : '',
      errorPassword: !password ? 'Введите пароль' : ''
    }
  }

  if (validate.status !== StatusValidation.TRUE) return validate

  const validEmail = email.match(/@/g)

  //Проверка на валидность email
  if (!validEmail || validEmail.length !== 1) validate = {
    ...validate,
    status: StatusValidation.EMAIL_ERROR,
    errorEmail: 'Введён некорректный email'
  }

  //Проверка на валидность password
  if (password.length < 8) validate = {
    ...validate,
    status: StatusValidation.PASSWORD_ERROR,
    errorPassword: 'Пароль должен быть не меньше 8 символов'
  }

  return validate
}


export default isValidate