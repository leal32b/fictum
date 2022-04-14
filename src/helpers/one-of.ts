import filterArray from '@/helpers/filter-array'
import random from '@/helpers/random'

type Element = {
  [key: string]: any
}

const oneOf = (array: Element[], filter: Element = null): Element => {
  if (filter) {
    array = filterArray(array, filter)
  }

  const index = random(array.length)

  return array[index]
}

export default oneOf
