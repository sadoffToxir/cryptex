export const unixToIsoDateAndTime = (unix: number) => {
  return new Date(unix).toISOString().split('T').join(' at ').slice(0, -5)
}