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
      const firstName = sut.firstName({ gender: 'f' })

      expect(firstNames).toContain(firstName)
      expect(firstName.gender).toEqual('f')
    })
  })

  describe('lastName', () => {
    it('should return a random lastName', () => {
      const lastNames = locale.en.name.lastName
      const lastName = sut.lastName()

      expect(lastNames).toContain(lastName)
    })
  })
})
