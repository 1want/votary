import { useMemo } from 'react'

interface Props {
  total?: number
  currentPage?: number
  size?: number
  space?: number
}

export const DOTS = ' ... '

const range = (start, end) => {
  let length = end - start + 1
  return Array.from({ length }, (_, i) => i + start)
}

function usePagination(props: Props) {
  const { total = 0, currentPage = 1, size = 10, space = 5 } = props
  const totalPageNumber = Math.ceil(total / size)

  const pag = useMemo(() => {
    if (totalPageNumber <= space + 2) {
      return range(1, totalPageNumber)
    }

    const left = Math.max(currentPage - space, 1)
    const right = Math.min(currentPage + space, totalPageNumber + 2)

    const showLeftDots = currentPage >= space
    const showRightDots = totalPageNumber + 2 > right

    console.log(showLeftDots, showRightDots)
    if (showLeftDots && !showRightDots) {
      let s = range(totalPageNumber - space, totalPageNumber)
      console.log('showL')
      return [1, DOTS, ...s]
    }

    if (!showLeftDots && showRightDots) {
      let s = range(left, space + 1)
      console.log('showR')
      return [...s, DOTS, totalPageNumber]
    }

    if (showLeftDots && showRightDots) {
      console.log('mi')
      let s = range(left, currentPage)
      return [...s, DOTS, totalPageNumber]
    }
  }, [currentPage])

  return pag
}

export default usePagination
