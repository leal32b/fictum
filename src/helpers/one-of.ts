import filterArray from './filter-array'
import random from './random'

const oneOf = (array: any[], filter = {}): any => {
  const filteredArray = filterArray(array, filter)
  const index = random(filteredArray.length)

  return filteredArray[index]
}

export default oneOf
