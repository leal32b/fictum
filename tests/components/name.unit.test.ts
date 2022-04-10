import * as sut from '../../src/components/name'
import * as locale from '../../src/locale'

describe('Name', () => {
  describe('firstName', () => {
    it('should return a random firstName', () => {
      const firstNames = locale.en.name.firstName
      const firstName = sut.firstName()

      expect(firstNames).toContain(firstName)
    })

    it('should return a random firstName for the given gender', () => {
      const firstNames = locale.en.name.firstName
      const firstName = sut.firstName({ gender: 'F' })

      expect(firstNames).toContain(firstName)
      expect(firstName.gender).toEqual('F')
    })
  })
})
