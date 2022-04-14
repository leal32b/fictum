import getValues from '@/helpers/get-values'
import oneOf from '@/helpers/one-of'

const lastName = (): string => {
  const { lastName } = getValues('person')

  return oneOf(lastName).value
}

export default lastName
