import * as locale from '@/locale'

type Values = {
  [key: string]: any
}

const getValues = (value: string): Values => {
  return locale[locale.lang.code][value]
}

export default getValues
