// @flow

export type ValidatorFunction = (
  value: any,
  label: string,
  ...args: any[]
) => string | null
export type ValidatorTypes = "required" | "email" | "minLength"
export type ValidatorConfig = {
  validatorType: ValidatorTypes
  validatorArgs?: any[]
}

/**
 * Map of Validator functions
 */
export const Validators: {[key: string]: ValidatorFunction} = {
  required: (value, label: string) => {
    if (!value) return `${label} is required.`
    return null
  },
  email: (value: string, label: string) => {
    const emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    if (!value.match(emailRegex)) {
      return `${label} is invalid.`
    }
    return null
  },
  minLength: (value: string, label: string, requiredLength: number) => {
    if (value && value.length < requiredLength) {
      return `${label} must be at least ${requiredLength} characters.`
    }
    return null
  }
}
