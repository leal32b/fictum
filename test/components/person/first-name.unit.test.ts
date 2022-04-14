import firstName from '@/components/person/first-name'
import getValues from '@/helpers/get-values'

describe('firstName', () => {
  const { firstName: firstNameValues } = getValues('person')

  it('should return a random firstName', () => {
    const result = firstName()

    expect(firstNameValues.find(e => e.value === result)).toBeTruthy()
  })

  it('should return a random firstName for the given gender', () => {
    for (let i = 0; i < 10; i++) {
      const result = firstName({ gender: 'f' })
      expect(firstNameValues.find(e => e.value === result && e.gender === 'f')).toBeTruthy()
    }
  })
})
