import fictum from '@/index'

describe('Fictum', () => {
  beforeEach(() => {
    fictum.locale('en')
  })

  describe('locale', () => {
    it('should set a new locale', () => {
      const localeToBe = 'pt_BR'
      const result = fictum.locale('pt-BR')

      expect(result).toEqual(localeToBe)
    })

    it('should get the locale if no param is provided', () => {
      const localeToBe = 'en'
      const result = fictum.locale()

      expect(result).toEqual(localeToBe)
    })
  })
})
