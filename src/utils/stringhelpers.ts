import moment from 'moment'
// June 3, 2019
export const prettyWordDate = (date: number | string | Date): string => {
  if (!date) {
    throw new Error(
			`Expected number, string, or date object, but got: ${date}`,
    )
  }
  return moment(date).format('LL')
}

export const prettyCurrentDatePlusYears = (date: Date): string =>
  moment(date).format('L')

export const truncateString = (str: string, num: number): string => {
  // If the length of str is less than or equal to num
  // just return str--don't truncate it.
  if (str.length <= num) {
    return str
  }
  // Return str truncated with '...' concatenated to the end of str.
  return str.slice(0, num) + '...'
}

/* eslint-disable */ 
const isObject = (o: any): boolean => {
  return o === Object(o) && !isArray(o) && typeof o !== 'function'
}

const isArray = (a: any): boolean => {
  return Array.isArray(a)
}

const toCamel = (s: any): string => {
  return s.replace(/([-_][a-z])/ig, ($1: any) => {
    return $1.toUpperCase()
      .replace('-', '')
      .replace('_', '')
  })
}

export const keysToCamel = (o: any): Record<string, unknown> | Array<any> => {
  if (isObject(o)) {
    const n = {}

    Object.keys(o)
      .forEach((k) => {
        // @ts-ignore
        n[toCamel(k)] = keysToCamel(o[k])
      })

    return n
  } else if (isArray(o)) {
    return o.map((i: any) => {
      return keysToCamel(i)
    })
  }
  return o
}