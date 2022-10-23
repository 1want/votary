import { useMemo } from 'react'

interface Props {
  total?: number
  currentPage?: number
  size?: number
  space?: number
}

const range = (start: number, end: number) => {
  let length = end - start + 1
  return Array.from({ length }, (_, i) => i + start)
}

function usePagination(props: Props) {
  const { total = 0, currentPage = 1, size = 10, space = 5 } = props
  const totalPageNumber = Math.ceil(total / size)

  const pag = useMemo(() => {
    if (total === 0) {
      return []
    }
    if (totalPageNumber <= space + 2) {
      return range(1, totalPageNumber)
    }

    const left = Math.max(currentPage - space, 1)
    const right = Math.min(currentPage + space, totalPageNumber + 2)

    const showLeftDots = currentPage >= space
    const showRightDots = totalPageNumber > right - 2

    if (showLeftDots && !showRightDots) {
      let rightRange = range(totalPageNumber - space, totalPageNumber)
      return [1, 'more', ...rightRange]
    }

    if (!showLeftDots && showRightDots) {
      let leftRange = range(left, space + 1)
      return [...leftRange, 'more', totalPageNumber]
    }

    if (showLeftDots && showRightDots) {
      let midRange = range(currentPage - 2, currentPage + 2)
      return [1, 'more', ...midRange, 'more', totalPageNumber]
    }
  }, [currentPage])

  return pag
}

export default usePagination
