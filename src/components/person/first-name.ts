import getValues from '@/helpers/get-values'
import oneOf from '@/helpers/one-of'
import { Gender } from '@/types/person'

type Opt = { gender: Gender }

const firstName = (opt: Opt = null): string => {
  const { firstName } = getValues('person')

  return oneOf(firstName, opt).value
}

export default firstName
