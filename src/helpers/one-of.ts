import filterArray from '@/helpers/filter-array'
import random from '@/helpers/random'

const oneOf = (array: any[], filter = {}): any => {
  const filteredArray = filterArray(array, filter)
  const index = random(filteredArray.length)

  return filteredArray[index]
}

export default oneOf
