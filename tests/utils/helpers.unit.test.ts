import * as sut from '../../src/utils/helpers'

describe('Helpers', () => {
  describe('adjustLangCode', () => {
    it('should return the same code it there is nothing to adjust', () => {
      const codeInput = ['en', 'pt_BR']

      codeInput.forEach(code => {
        const result = sut.adjustLangCode(code)

        expect(result).toBe(code)
      })
    })

    it('should adjust the code if it has "-" in it', () => {
      const codeInput = 'pt-BR'
      const codeToBe = 'pt_BR'
      const result = sut.adjustLangCode(codeInput)

      expect(result).toBe(codeToBe)
    })

    it('should adjust the case of code', () => {
      const codeInput = 'PT-br'
      const codeToBe = 'pt_BR'
      const result = sut.adjustLangCode(codeInput)

      expect(result).toBe(codeToBe)
    })

    it('should return default if the code does not exist or is invalid', () => {
      const codeInput = ['wrong_code', 'lang']

      codeInput.forEach(code => {
        const result = sut.adjustLangCode(code)

        expect(result).toBe('en')
      })
    })

    it('should return default if the code does not follow the pattern', () => {
      const codeInput = ['en*', '99']

      codeInput.forEach(code => {
        const result = sut.adjustLangCode(code)

        expect(result).toBe('en')
      })
    })
  })

  describe('random', () => {
    it('should return a random number between 0 and limit', () => {
      const limit = 9
      const result = sut.random(limit)

      expect(result).toBeGreaterThanOrEqual(0)
      expect(result).toBeLessThanOrEqual(limit)
      expect(Number.isInteger(result)).toBeTruthy()
    })
  })

  describe('filterArray', () => {
    it('should filter an array based on the passed filter', () => {
      const array = [{ value: 1, type: 'x' }, { value: 2, type: 'y' }]
      const filter = { type: 'y' }
      const result = sut.filterArray(array, filter)

      expect(result.length).toBe(1)
      expect(result[0]).toEqual(array[1])
    })
  })
})
