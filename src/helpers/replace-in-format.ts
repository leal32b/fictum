type Values = {
  [key: string]: string
}

const replaceInFormat = (format: string, values: Values): string => {
  let result = format

  Object.entries(values).forEach(([key, value]: [string, string]) => {
    result = result.replace(key, value)
  })

  return result
}

export default replaceInFormat
