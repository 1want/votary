import { createNamespace } from '../../utils/createNamespace'
import classNames from 'classnames'
import { PaginationProps } from './types'

const bem = createNamespace('pagination')

const classes = classNames([''])

const Pagination = (props: PaginationProps) => {
  const { small, current = 0, total, size = 10, sizeChange, pageChange } = props

  const PagItem = () => {
    const num = Math.ceil(total / size)
    const Item = [...Array(num)].map((item, index) => (
      <div
        className={`v-pagination-item ${current === index && 'current'}`}
        key={index}>
        {index}
      </div>
    ))
    return <li className='v-pagination-content'>{Item}</li>
  }

  return (
    <ul className='v-pagination'>
      <li className='iconfont icon-arrow-left' onClick={() => {}}></li>
      <PagItem />
      <li className='iconfont icon-arrow-right'></li>
    </ul>
  )
}

export default Pagination
