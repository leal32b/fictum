import firstName from '@/components/person/first-name'
import lastName from '@/components/person/last-name'
import replaceInFormat from '@/helpers/replace-in-format'
import { Format, Gender } from '@/types/person'

const fullName = (opt: { gender?: Gender, format?: Format } = null): any => {
  const gender = opt?.gender ? { gender: opt.gender } : null
  const format: Format = opt?.format ? opt.format : 'firstName lastName'
  const values = {
    firstName: firstName(gender),
    lastName: lastName()
  }

  return replaceInFormat(format, values)
}

export default fullName
