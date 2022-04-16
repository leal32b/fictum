import fullName from '@/components/person/full-name'
import getValues from '@/helpers/get-values'

describe('fullName', () => {
  const { firstName: firstNameValues, lastName: lastNameValues } = getValues('person')

  it('should return a random fullName', () => {
    const result = fullName()
    const [resultFirstName, resultLastName] = result.split(' ')

    expect(firstNameValues.find(e => e.value === resultFirstName)).toBeTruthy()
    expect(lastNameValues.find(e => e.value === resultLastName)).toBeTruthy()
  })

  it('should return a random fullName for the given gender', () => {
    for (let i = 0; i < 10; i++) {
      const result = fullName({ gender: 'm' })
      const [resultFirstName, resultLastName] = result.split(' ')

      expect(firstNameValues.find(e => e.value === resultFirstName && e.gender === 'm')).toBeTruthy()
      expect(lastNameValues.find(e => e.value === resultLastName)).toBeTruthy()
    }
  })

  it('should return a random fullName for the given format', () => {
    for (let i = 0; i < 10; i++) {
      const result = fullName({ format: 'lastName, firstName' })
      const [resultLastName, resultFirstName] = result.split(', ')

      expect(firstNameValues.find(e => e.value === resultFirstName)).toBeTruthy()
      expect(lastNameValues.find(e => e.value === resultLastName)).toBeTruthy()
    }
  })
})
