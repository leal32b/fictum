import * as sut from '@/utils/operations'

describe('Operations', () => {
  describe('oneOf', () => {
    it('should return one random element of a given array', () => {
      const array = ['item1', 'item2', 'item3']
      const chosen = sut.oneOf(array)

      expect(array).toContain(chosen)
    })
  })
})
