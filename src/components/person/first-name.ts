import getValues from '@/helpers/get-values'
import oneOf from '@/helpers/one-of'
import { Gender } from '@/types/person'

const firstName = (opt: { gender: Gender } = null): string => {
  const { firstName } = getValues('name')

  return oneOf(firstName, opt).value
}

export default firstName
