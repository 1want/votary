import { useState } from 'react'
import { createNamespace } from '../../utils/createNamespace'
import classnames from 'classnames'
import { Button } from '../button'
import usePagination from '../../hooks/usePagination'
import { DOTS } from '../../hooks/usePagination'
import { PaginationProps } from './types'

const Pagination = (props: PaginationProps) => {
  const {
    small = false,
    current = 1,
    total,
    size = 10,
    sizeChange,
    pageChange
  } = props
  const [currentPage, setCurrentPage] = useState(current)

  const pag = usePagination({ total, currentPage, size })

  const previous = () => {
    pageChange?.(current - 1)
    setCurrentPage(current - 1)
  }

  const next = () => {
    pageChange?.(current + 1)
    setCurrentPage(current + 1)
  }

  const renderPagItem = () =>
    pag?.map(item => {
      if (item === DOTS) {
        return (
          <li className='omit' key={item}>
            ...
          </li>
        )
      }
      return (
        <li
          onClick={() => {
            pageChange?.(item)
            setCurrentPage(item)
          }}
          className={`number${currentPage === item ? ' current' : ''}${
            small ? ' small' : ''
          }`}
          key={item}>
          {item}
        </li>
      )
    })

  return (
    <div className='v-pagination'>
      <Button
        icon='arrow-left'
        onClick={previous}
        disabled={current === 1}
        className={`${small ? ' small' : 'normal'}`}
      />
      {renderPagItem()}
      <Button
        icon='arrow-right'
        onClick={next}
        disabled={current === Math.ceil(total / size)}
        className={`${small ? ' small' : 'normal'}`}
      />
    </div>
  )
}

export default Pagination
