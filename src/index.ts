import * as name from './components/name'
import * as locale from './locale'
import { adjustLangCode } from './utils/helpers'

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
