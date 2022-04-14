import filterArray from '@/helpers/filter-array'
import random from '@/helpers/random'

type Filter = { [key: string]: any }

const oneOf = (array: any[], filter: Filter = null): any => {
  if (filter) {
    array = filterArray(array, filter)
  }

  const index = random(array.length)

  return array[index]
}

export default oneOf
