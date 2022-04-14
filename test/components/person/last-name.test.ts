import lastName from '@/components/person/last-name'
import getValues from '@/helpers/get-values'

describe('lastName', () => {
  const { lastName: lastNameValues } = getValues('person')

  it('should return a random lastName', () => {
    const result = lastName()

    expect(lastNameValues.find(e => e.value === result)).toBeTruthy()
  })
})
