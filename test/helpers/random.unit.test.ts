import random from '../../src/helpers/random'

describe('random', () => {
  it('should return a random number between 0 and limit', () => {
    const limit = 9
    const result = random(limit)

    expect(result).toBeGreaterThanOrEqual(0)
    expect(result).toBeLessThanOrEqual(limit)
    expect(Number.isInteger(result)).toBeTruthy()
  })
})
