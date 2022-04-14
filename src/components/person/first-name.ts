import oneOf from '@/helpers/one-of'
import * as locale from '@/locale'
import { Gender } from '@/types/person'

const firstName = (opt: { gender: Gender } = null): string => {
  const { firstName } = locale[locale.lang.code].name

  return oneOf(firstName, opt).value
}

export default firstName
