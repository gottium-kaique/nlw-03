/* eslint @typescript-eslint/no-unused-vars: 'off' */

import { ErrorRequestHandler } from 'express'
import { ValidationError } from 'yup'

interface ValidationErrors {
  [key: string]: string[]
}

const errorHandler: ErrorRequestHandler = (error, _, response, next) => {
  if (error instanceof ValidationError) {
    const errors: ValidationErrors = {}

    error.inner.forEach(err => {
      errors[err.path] = err.errors
    })

    return response.status(400).json({
      message: 'Validation fails.',
      errors,
    })
  }

  console.error(error)

  return response.sendStatus(500)
}

export default errorHandler
