import { useState } from 'react';

interface PaginationType {
  (
    email: string,
    password: string,
    passwordCheck?: string
  ): void
}

interface StatusType {
  status: boolean
  errorEmail: string
  errorPassword: string
}

const usePagination: PaginationType = (email, password, ...props) => {

  const [status, setStatus] = useState<StatusType>({status: true, errorEmail: '', errorPassword: ''})

  if (email.match(/@/g).length !== 1) setStatus({
    ...status,
    status: false,
    errorEmail: 'Введён некорректный email' 
  })

  if (password.length < 8) setStatus({
    ...status,
    status: false,
    errorPassword: 'Пароль должен быть не меньше 8 символов'
  })

  return {status}
}