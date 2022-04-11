import sut from '../src'

describe('Fictum', () => {
  beforeEach(() => {
    sut.locale('en')
  })

  describe('locale', () => {
    it('should set a new locale', () => {
      const localeToBe = 'pt_BR'
      const result = sut.locale('pt-BR')

      expect(result).toEqual(localeToBe)
    })

    it('should get the locale if no param is provided', () => {
      const localeToBe = 'en'
      const result = sut.locale()

      expect(result).toEqual(localeToBe)
    })
  })
})
