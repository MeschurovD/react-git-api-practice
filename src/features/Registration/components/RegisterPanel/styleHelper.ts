import { StatusValidation } from './../../../../utils/isValidate';


interface TrueStyle {
  btnStyle: string
  headerStyle: string
  inputStyleEmail: string
  inputStylePassword: string
}

interface StyleHelperType {
  (
    styles: any,
    reg: boolean,
    checkFirstDownload: boolean,
    invalidInput: StatusValidation
  ): TrueStyle
}


const styleHelper: StyleHelperType = (styles, reg, checkFirstDownload, invalidInput) => {
  console.log(styles);
  

  const btnStyle = checkFirstDownload
    ? reg ? `${styles.btnSignIn} ${styles.btn_color_2} ${styles.btnAnimSign} ${styles.btnSignUpAnim}` : `${styles.btnSignIn} ${styles.btn_color_1} ${styles.btnAnimReg} ${styles.btnSignDownAnim}`
    : `${styles.btnSignIn} ${styles.btn_color_2} ${styles.btnAnimSign}`
  const headerStyle = reg ? `${styles.panel__card_header} ${styles.text_color_2}` : `${styles.panel__card_header} ${styles.text_color_1}`
  
  const inputStyleEmail = (reg
    ? `${styles.input_r} ${styles.left}` 
    : `${styles.input_r} ${styles.right}`) 
    + (invalidInput === StatusValidation.EMAIL_ERROR || invalidInput === StatusValidation.EMAIL_AND_PASSWORD_ERROR
      ? ` ${styles.inputInvalidAnim}`
      : '')
  const inputStylePassword = (reg
    ? `${styles.input_r} ${styles.left}`
    : `${styles.input_r} ${styles.right}`) 
    + (invalidInput === StatusValidation.PASSWORD_ERROR || invalidInput === StatusValidation.EMAIL_AND_PASSWORD_ERROR 
      ? ` ${styles.inputInvalidAnim}`
      : '')

  

  console.log(btnStyle)
  console.log(headerStyle)
  console.log(inputStyleEmail)
  console.log(inputStylePassword)

  return {
    btnStyle,
    headerStyle,
    inputStyleEmail,
    inputStylePassword,
  }
}

export default styleHelper