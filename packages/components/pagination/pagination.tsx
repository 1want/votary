import { useState } from 'react'
import { createNamespace } from '../../utils/createNamespace'
import classnames from 'classnames'
import { Button } from '../button'
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

  const min = Math.max(0, currentPage - 3)
  const max = Math.max(5, currentPage + 2)
  const allPages = Math.ceil(total / size)
  const space = 5
  const number = Array.from(Array(allPages).keys(), x => x + 1).slice(min, max)

  const previous = () => {
    setCurrentPage(currentPage - 1)
    pageChange?.(currentPage - 1)
  }

  const next = () => {
    setCurrentPage(currentPage + 1)
    pageChange?.(currentPage + 1)
  }

  const renderPagItem = () => {
    const Item = number.map(item => (
      <li
        onClick={() => {
          setCurrentPage(item)
          pageChange?.(item)
        }}
        className={`number${currentPage === item ? ' current' : ''}${
          small ? ' small' : ''
        }`}
        key={item}>
        {item}
      </li>
    ))

    const first = () => {
      return (
        <li
          onClick={() => {
            setCurrentPage(1)
            pageChange?.(1)
          }}
          className={`number${small ? ' small' : ''}`}>
          1
        </li>
      )
    }
    const end = () => {
      return (
        <li
          onClick={() => {
            setCurrentPage(allPages)
            pageChange?.(allPages)
          }}
          className={`number${small ? ' small' : ''}`}>
          {allPages}
        </li>
      )
    }
    const l = () => {
      return currentPage >= space && <li className='omit'>...</li>
    }
    const r = () => {
      return allPages - space >= currentPage && <li className='omit'>...</li>
    }
    return (
      <ul className='v-page'>
        {first()}
        {l()}
        {Item}
        {r()}
        {allPages - 2 > space && end()}
      </ul>
    )
  }

  return (
    <div className='v-pagination'>
      <Button
        icon='arrow-left'
        onClick={previous}
        disabled={currentPage === 1}
        className={`${small ? ' small' : 'normal'}`}
      />
      {renderPagItem()}
      <Button
        icon='arrow-right'
        onClick={next}
        disabled={currentPage === Math.ceil(total / size)}
        className={`${small ? ' small' : 'normal'}`}
      />
    </div>
  )
}

export default Pagination
