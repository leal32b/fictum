import name from '@/components/name'
import adjustLangCode from '@/helpers/adjust-lang-code'
import { lang } from '@/locale'

const fictum = {
  locale (code: string = null): string {
    if (code) {
      lang.code = adjustLangCode(code)
    }

    return lang.code
  },

  name
}

export = fictum
