type Values = {
  [key: string]: string | number
}

const replaceInFormat = (format: string, values: Values): string => {
  let result = format

  Object.entries(values).forEach(([key, value]) => {
    result = result.replace(`[${key}]`, value as any)
  })

  return result
}

export default replaceInFormat
