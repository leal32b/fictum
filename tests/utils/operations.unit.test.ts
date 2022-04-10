import * as sut from '../../src/utils/operations'

describe('Operations', () => {
  describe('oneOf', () => {
    it('should return one random element of a given array', () => {
      const array = [
        { value: 'item1', type: 'x' },
        { value: 'item2', type: 'x' },
        { value: 'item3', type: 'y' }
      ]
      const filter = { type: 'x' }
      const chosen = sut.oneOf(array, filter)

      expect(array).toContain(chosen)
    })
  })
})
