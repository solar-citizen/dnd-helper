export const logRequest = ({ method, url }, res, next) => {
  console.log(`[${new Date().toISOString().replace(/(.+)T(.+)/g, '$1')}] ${method} ${url}`)
  next()
}
