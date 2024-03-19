export const parseColumnNames = (obj: any): any => {
  if (obj === null || typeof obj !== 'object') {
    return obj
  }

  if (Array.isArray(obj)) {
    return obj.map(parseColumnNames)
  }

  return Object.keys(obj).reduce((acc, key) => {
    const camelKey = key.replace(/_([a-z])/g, (_, match) => match.toUpperCase())
    acc[camelKey] = parseColumnNames(obj[key])
    return acc
  }, {})
}
