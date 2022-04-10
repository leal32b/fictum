import * as locale from '../locale'
import { oneOf } from '../utils/operations'

type Name = {
  value: string
}

type FirstName = Name & {
  gender: string
}

export const firstName = (filter = {}): FirstName => {
  const firstName = locale[locale.lang.code].name.firstName

  return oneOf(firstName, filter)
}
