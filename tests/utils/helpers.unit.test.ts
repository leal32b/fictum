import * as sut from '../../src/utils/helpers'

describe('Helpers', () => {
  describe('adjustLangCode', () => {
    it('should return the same code it there is nothing to adjust', () => {
      const codeInput = ['en', 'pt_BR']

      codeInput.forEach(code => {
        const codeOutput = sut.adjustLangCode(code)

        expect(codeOutput).toBe(code)
      })
    })

    it('should adjust the code if it has "-" in it', () => {
      const codeInput = 'pt-BR'
      const codeToBe = 'pt_BR'
      const codeOutput = sut.adjustLangCode(codeInput)

      expect(codeOutput).toBe(codeToBe)
    })

    it('should adjust the case of code', () => {
      const codeInput = 'PT-br'
      const codeToBe = 'pt_BR'
      const codeOutput = sut.adjustLangCode(codeInput)

      expect(codeOutput).toBe(codeToBe)
    })

    it('should return default if the code does not exist or is invalid', () => {
      const codeInput = ['wrong_code', 'lang']

      codeInput.forEach(code => {
        const codeOutput = sut.adjustLangCode(code)

        expect(codeOutput).toBe('en')
      })
    })

    it('should return default if the code does not follow the pattern', () => {
      const codeInput = ['en*', '99']

      codeInput.forEach(code => {
        const codeOutput = sut.adjustLangCode(code)

        expect(codeOutput).toBe('en')
      })
    })
  })

  describe('random', () => {
    it('should return a random number between 0 and limit', () => {
      const limit = 9
      const rndNumber = sut.random(limit)

      expect(rndNumber).toBeGreaterThanOrEqual(0)
      expect(rndNumber).toBeLessThanOrEqual(limit)
      expect(Number.isInteger(rndNumber)).toBeTruthy()
    })
  })

  describe('filterArray', () => {
    it('should filter an array based on the passed filter', () => {
      const array = [{ value: 1, type: 'x' }, { value: 2, type: 'y' }]
      const filter = { type: 'y' }
      const filteredArray = sut.filterArray(array, filter)

      expect(filteredArray.length).toBe(1)
      expect(filteredArray[0]).toEqual(array[1])
    })
  })
})
