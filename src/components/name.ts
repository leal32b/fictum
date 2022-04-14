import oneOf from '@/helpers/one-of'
import replaceInFormat from '@/helpers/replace-in-format'
import * as locale from '@/locale'

type Gender = 'f' | 'm'

const defaultFormat = '[firstName] [lastName]'
type Format = typeof defaultFormat | '[lastName] [firstName]' | '[lastName], [firstName]'

export const firstName = (opt: { gender: Gender } = null): string => {
  const { firstName } = locale[locale.lang.code].name

  return oneOf(firstName, opt).value
}

export const lastName = (): string => {
  const { lastName } = locale[locale.lang.code].name

  return oneOf(lastName).value
}

export const fullName = (opt: { gender?: Gender, format?: Format } = null): any => {
  const gender = opt?.gender ? { gender: opt.gender } : null
  const format = opt?.format ? opt.format : defaultFormat
  const values = {
    firstName: firstName(gender),
    lastName: lastName()
  }

  return replaceInFormat(format, values)
}
