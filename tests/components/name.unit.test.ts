import * as sut from '../../src/components/name'
import * as locale from '../../src/locale'

describe('Name', () => {
  describe('firstName', () => {
    it('should return a random firstName', () => {
      const { firstName } = locale.en.name
      const result = sut.firstName()

      expect(firstName.find(e => e.value === result)).toBeTruthy()
    })

    it('should return a random firstName for the given gender', () => {
      const { firstName } = locale.en.name
      const result = sut.firstName({ gender: 'f' })

      expect(firstName.find(e => e.value === result && e.gender === 'f')).toBeTruthy()
    })
  })

  describe('lastName', () => {
    it('should return a random lastName', () => {
      const { lastName } = locale.en.name
      const result = sut.lastName()

      expect(lastName.find(e => e.value === result)).toBeTruthy()
    })
  })

  describe('fullName', () => {
    it('should return a random fullName', () => {
      const { firstName, lastName } = locale.en.name
      const result = sut.fullName()
      const [resultFirstName, resultLastName] = result.split(' ')

      expect(firstName.find(e => e.value === resultFirstName)).toBeTruthy()
      expect(lastName.find(e => e.value === resultLastName)).toBeTruthy()
    })
  })
})
