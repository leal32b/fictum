import * as name from './components/name'
import adjustLangCode from './helpers/adjust-lang-code'
import * as locale from './locale'

const fictum = {
  locale (code: string = null): string {
    if (code) {
      locale.lang.code = adjustLangCode(code)
    }

    return locale.lang.code
  },

  name
}

export = fictum
