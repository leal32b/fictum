const filterArray = (array: any[], filter: any): any[] => {
  return array.filter(array => {
    return Object.keys(filter).every(key => array[key] === filter[key])
  })
}

export default filterArray
