import getValues from '@/helpers/get-values'

describe('ComponentName', () => {
  it('should get values from locale based on given params', () => {
    const value = 'person'
    const result = getValues(value)

    expect(result).toBeTruthy()
  })
})
