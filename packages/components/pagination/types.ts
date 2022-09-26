export interface PaginationProps {
  total: number
  size?: number
  current?: number
  pageSize?: number
  small?: boolean
  sizeChange?: (size: number) => void
  pageChange?: (page: number) => void
}
