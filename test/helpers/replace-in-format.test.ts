import replaceInFormat from '@/helpers/replace-in-format'

describe('ReplaceInFormat', () => {
  it('should return format with values replaced', () => {
    const format = 'one - two'
    const values = { one: '1', two: '2' }
    const result = replaceInFormat(format, values)

    expect(result).toBe('1 - 2')
  })
})
