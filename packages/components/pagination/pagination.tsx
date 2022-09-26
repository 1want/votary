import { PaginationProps } from './types'

const item = (total, size, current) => {
  const num = Math.ceil(total / size)
  return [...Array(num)].map((item, index) => (
    <div
      className={`v-pagination-item ${current === index && 'current'}`}
      key={index}>
      {index}
    </div>
  ))
}

const Pagination = (props: PaginationProps) => {
  const { small, current = 0, total, size = 10 } = props
  return (
    <div className='v-pagination'>
      <div className='iconfont icon-arrow-left'></div>
      <div className='v-pagination-content'>{item(total, size, current)}</div>
      <div className='iconfont icon-arrow-right'></div>
    </div>
  )
}

export default Pagination
