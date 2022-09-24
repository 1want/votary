export interface NoticeProps {
  title: string
  message?: string
  duration?: number
  id?: number
  blur?: boolean
  remove?: (id) => void
}
