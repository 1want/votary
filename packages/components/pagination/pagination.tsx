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

  const previous = () => {
    setCurrentPage(currentPage - 1)
    pageChange?.(currentPage - 1)
  }

  const next = () => {
    setCurrentPage(currentPage + 1)
    pageChange?.(currentPage + 1)
  }

  const renderPagItem = () => {
    const allPages = Math.ceil(total / size)
    const space = 5
    const number = Array.from(Array(allPages).keys(), x => x + 2).slice(
      0,
      space
    )
    const Item = number.map(item => (
      <div
        onClick={() => {
          setCurrentPage(item)
          pageChange?.(item)
        }}
        className={`number${currentPage === item ? ' current' : ''}${
          small ? ' small' : ''
        }`}
        key={item}>
        {item}
      </div>
    ))

    const first = () => {
      return (
        <div
          onClick={() => {
            setCurrentPage(1)
            pageChange?.(1)
          }}
          className={`number${small ? ' small' : ''}`}>
          1
        </div>
      )
    }
    const end = () => {
      return (
        <div
          onClick={() => {
            setCurrentPage(allPages)
            pageChange?.(allPages)
          }}
          className={`number${small ? ' small' : ''}`}>
          {allPages}
        </div>
      )
    }
    const l = () => {
      return currentPage >= allPages - space && <div className='omit'>...</div>
    }
    const r = () => {
      return allPages - currentPage >= space && <div className='omit'>...</div>
    }
    return (
      <div className='v-page'>
        {first()}
        {l()}
        {Item}
        {r()}
        {end()}
      </div>
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
