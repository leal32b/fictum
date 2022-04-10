import { random } from '@/utils/helpers'

export const oneOf = (array: any[]): any => {
  const index = random(array.length)

  return array[index]
}
