import * as name from '@/components/name'
import * as locale from '@/locale'

describe('Name', () => {
  describe('firstName', () => {
    it('should return a random firstName', () => {
      const { firstName } = locale.en.name
      const result = name.firstName()

      expect(firstName.find(e => e.value === result)).toBeTruthy()
    })

    it('should return a random firstName for the given gender', () => {
      const { firstName } = locale.en.name

      for (let i = 0; i < 10; i++) {
        const result = name.firstName({ gender: 'f' })
        expect(firstName.find(e => e.value === result && e.gender === 'f')).toBeTruthy()
      }
    })
  })

  describe('lastName', () => {
    it('should return a random lastName', () => {
      const { lastName } = locale.en.name
      const result = name.lastName()

      expect(lastName.find(e => e.value === result)).toBeTruthy()
    })
  })

  describe('fullName', () => {
    it('should return a random fullName', () => {
      const { firstName, lastName } = locale.en.name
      const result = name.fullName()
      const [resultFirstName, resultLastName] = result.split(' ')

      expect(firstName.find(e => e.value === resultFirstName)).toBeTruthy()
      expect(lastName.find(e => e.value === resultLastName)).toBeTruthy()
    })

    it('should return a random fullName for the given gender', () => {
      const { firstName, lastName } = locale.en.name

      for (let i = 0; i < 10; i++) {
        const result = name.fullName({ gender: 'm' })
        const [resultFirstName, resultLastName] = result.split(' ')

        expect(firstName.find(e => e.value === resultFirstName && e.gender === 'm')).toBeTruthy()
        expect(lastName.find(e => e.value === resultLastName)).toBeTruthy()
      }
    })

    it('should return a random fullName for the given format', () => {
      const { firstName, lastName } = locale.en.name

      for (let i = 0; i < 10; i++) {
        const result = name.fullName({ format: '[lastName], [firstName]' })
        const [resultLastName, resultFirstName] = result.split(', ')

        expect(firstName.find(e => e.value === resultFirstName)).toBeTruthy()
        expect(lastName.find(e => e.value === resultLastName)).toBeTruthy()
      }
    })
  })
})
