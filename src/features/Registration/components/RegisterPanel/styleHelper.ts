import { StatusValidation } from './../../../../utils/isValidate';


interface TrueStyle {
  btnStyle: string
  headerStyle: string
  headerTitle: string
  inputStyleEmail: string
  inputStylePassword: string
  sign: string
}

interface StyleHelperType {
  (
    reg: boolean,
    checkFirstDownload: boolean,
    invalidInput: StatusValidation
  ): TrueStyle
}


const styleHelper: StyleHelperType = (reg, checkFirstDownload, invalidInput) => {
  console.log(invalidInput);
  

  const btnStyle = checkFirstDownload
    ? reg ? 'btn-sign-in btn-color-2 btn-anim-sign btn-sign-up-anim' : 'btn-sign-in btn-color-1 btn-anim-reg btn-sign-down-anim'
    : 'btn-sign-in btn-color-2 btn-anim-sign'
  const headerStyle = reg ? 'panel__card-header text-color-2' : 'panel__card-header text-color-1'
  const headerTitle = reg ? 'login' : 'registration'
  const inputStyleEmail = (reg
    ? 'input-r left' 
    : 'input-r right') 
    + (invalidInput === StatusValidation.EMAIL_ERROR || invalidInput === StatusValidation.EMAIL_AND_PASSWORD_ERROR
      ? ' input-invalid-anim'
      : '')
  const inputStylePassword = (reg
    ? 'input-r left'
    : 'input-r right') 
    + (invalidInput === StatusValidation.PASSWORD_ERROR || invalidInput === StatusValidation.EMAIL_AND_PASSWORD_ERROR 
      ? ' input-invalid-anim'
      : '')

  const sign = reg ? 'Sing in' : 'Sing up'

  return {
    btnStyle,
    headerStyle,
    headerTitle,
    inputStyleEmail,
    inputStylePassword,
    sign
  }
}

export default styleHelper