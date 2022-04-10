import * as locale from '../locale'
import { oneOf } from '../utils/operations'

type Name = {
  value: string
}

type FirstName = Name & {
  gender: string
}

export const firstName = (filter = {}): FirstName => {
  const { firstName } = locale[locale.lang.code].name

  return oneOf(firstName, filter)
}

export const lastName = (): Name => {
  const { lastName } = locale[locale.lang.code].name

  return oneOf(lastName)
}
