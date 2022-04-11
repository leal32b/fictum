import oneOf from '../../src/helpers/one-of'

describe('Operations', () => {
  describe('oneOf', () => {
    it('should return one random element of a given array', () => {
      const array = [
        { value: 'item1', type: 'x' },
        { value: 'item2', type: 'x' },
        { value: 'item3', type: 'y' }
      ]
      const filter = { type: 'x' }
      const result = oneOf(array, filter)

      expect(array).toContain(result)
    })
  })
})
