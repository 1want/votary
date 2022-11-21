export function createBEM(name: string) {
  return (arr: string, originName = '') => {
    let className = ''
    const classNames = arr.split(' ')
    for (var i of classNames) {
      if (!i) continue
      className += `${name}-` + i + ' '
    }
    className = className.slice(0, -1)
    if (originName) {
      return `${originName} ${name} ${className}`
    }
    return `${name} ${className}`
  }
}

export function createNamespace(name: string) {
  const prefixedName = `v-${name}`

  return createBEM(prefixedName)
}
