import { filterArray, random } from '../utils/helpers'

type Value = {
  value: any
}

export const oneOf = (array: Value[], filter = {}): any => {
  const filteredArray = filterArray(array, filter)
  const index = random(filteredArray.length)

  return filteredArray[index]
}
