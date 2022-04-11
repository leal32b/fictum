import adjustLangCode from '../../src/helpers/adjust-lang-code'

describe('adjustLangCode', () => {
  it('should return the same code it there is nothing to adjust', () => {
    const codeInput = ['en', 'pt_BR']

    codeInput.forEach(code => {
      const result = adjustLangCode(code)

      expect(result).toBe(code)
    })
  })

  it('should adjust the code if it has "-" in it', () => {
    const codeInput = 'pt-BR'
    const codeToBe = 'pt_BR'
    const result = adjustLangCode(codeInput)

    expect(result).toBe(codeToBe)
  })

  it('should adjust the case of code', () => {
    const codeInput = 'PT-br'
    const codeToBe = 'pt_BR'
    const result = adjustLangCode(codeInput)

    expect(result).toBe(codeToBe)
  })

  it('should return default if the code does not exist or is invalid', () => {
    const codeInput = ['wrong_code', 'lang']

    codeInput.forEach(code => {
      const result = adjustLangCode(code)

      expect(result).toBe('en')
    })
  })

  it('should return default if the code does not follow the pattern', () => {
    const codeInput = ['en*', '99']

    codeInput.forEach(code => {
      const result = adjustLangCode(code)

      expect(result).toBe('en')
    })
  })
})
