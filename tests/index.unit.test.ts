import sut from '../src'

describe('Fictum', () => {
  beforeEach(() => {
    sut.locale('en')
  })

  describe('locale', () => {
    it('should set a new locale', () => {
      const localeToBe = 'pt_BR'
      const locale = sut.locale('pt-BR')

      expect(locale).toEqual(localeToBe)
    })

    it('should get the locale if no param is provided', () => {
      const localeToBe = 'en'
      const locale = sut.locale()

      expect(locale).toEqual(localeToBe)
    })
  })
})
