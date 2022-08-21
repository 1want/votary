export const parseRules = (arr: any) => {
  if (!arr || arr?.length < 0) return
  for (var i of arr) {
    if (i.required) {
      return true
    }
  }
}

export const arr = (rules, value) => {
  if (rules.required) {
    return value.length === 0 && rules.message
  }
  if (rules.max) {
    return value.length > rules.max && rules.message
  }
}
