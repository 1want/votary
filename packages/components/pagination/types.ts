export interface PaginationProps {
  total: number
  size?: number
  current?: number
  pageSize?: Array<number | string>
  small?: boolean
  sizeChange?: (size: number) => void
  onPageChange?: (page: number) => void
}
