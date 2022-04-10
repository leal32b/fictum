import * as locale from '../locale'
import { oneOf } from '../utils/operations'

export const firstName = (filter = {}): string => {
  const { firstName } = locale[locale.lang.code].name

  return oneOf(firstName, filter).value
}

export const lastName = (): string => {
  const { lastName } = locale[locale.lang.code].name

  return oneOf(lastName).value
}

export const fullName = (): string => {
  const resultFirstName = firstName()
  const resultLastName = lastName()

  return `${resultFirstName} ${resultLastName}`
}
