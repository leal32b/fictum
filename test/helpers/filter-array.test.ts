import filterArray from '@/helpers/filter-array'

describe('filterArray', () => {
  it('should filter an array based on the passed filter', () => {
    const array = [{ value: 1, type: 'x' }, { value: 2, type: 'y' }]
    const filter = { type: 'y' }
    const result = filterArray(array, filter)

    expect(result.length).toBe(1)
    expect(result[0]).toEqual(array[1])
  })
})
