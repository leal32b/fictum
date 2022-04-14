import oneOf from '@/helpers/one-of'
import * as locale from '@/locale'

const lastName = (): string => {
  const { lastName } = locale[locale.lang.code].name

  return oneOf(lastName).value
}

export default lastName
