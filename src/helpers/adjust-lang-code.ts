import * as locale from '@/locale'

const adjustLangCode = (code: string): string => {
  const [lang, country] = code.replace('-', '_').split('_')
  const adjustedCountry = country ? '_' + country.toUpperCase() : ''
  const adjustedCode = lang.toLowerCase() + adjustedCountry
  const regExpOnlyLettersAndUnderline = /[A-Za-z_]/g

  if (!regExpOnlyLettersAndUnderline.test(adjustedCode)) {
    console.log(`${adjustedCode} does not follow the language code pattern, using default language (en)`)

    return 'en'
  }

  if (!locale[adjustedCode] || adjustedCode === 'lang') {
    console.log(`${adjustedCode} does not exist, using default language (en)`)

    return 'en'
  }

  return adjustedCode
}

export default adjustLangCode
