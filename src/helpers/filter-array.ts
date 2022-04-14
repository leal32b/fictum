type Element = {
  [key: string]: any
}

const filterArray = (array: Element[], filter: Element): Element[] => {
  return array.filter(array => {
    return Object.keys(filter).every(key => array[key] === filter[key])
  })
}

export default filterArray
