import lastName from '@/components/person/last-name'
import * as locale from '@/locale'

describe('lastName', () => {
  const { lastName: lastNameValues } = locale.en.name

  it('should return a random lastName', () => {
    const result = lastName()

    expect(lastNameValues.find(e => e.value === result)).toBeTruthy()
  })
})
