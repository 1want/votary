import { useState } from 'react'
import { createNamespace } from '../../utils/createNamespace'
import classnames from 'classnames'
import { Button } from '../button'
import { PaginationProps } from './types'

const bem = createNamespace('pagination')

const Pagination = (props: PaginationProps) => {
  const {
    small = false,
    current = 1,
    total,
    size = 10,
    sizeChange,
    pageChange
  } = props
  const classes = bem(classnames([small && 'small']))

  console.log(classes)

  const [currentPage, setCurrentPage] = useState(current)

  const previous = () => {
    setCurrentPage(currentPage - 1)
  }

  const next = () => {
    setCurrentPage(currentPage + 1)
  }

  const PagItem = () => {
    const pages = Math.ceil(total / size)
    const number = Array.from(Array(pages).keys(), x => x + 1)
    const Item = number.map(item => (
      <div
        onClick={() => {
          setCurrentPage(item)
          pageChange?.(currentPage)
        }}
        className={`number${currentPage === item ? ' current' : ''}${
          small ? ' small' : ''
        }`}
        key={item}>
        {item}
      </div>
    ))
    return <div className='v-page'>{Item}</div>
  }

  return (
    <div className='v-pagination'>
      <Button
        icon='arrow-left'
        onClick={previous}
        disabled={currentPage === 1}
        className={`${small ? ' small' : ''}`}></Button>
      <PagItem />

      <Button
        icon='arrow-right'
        onClick={next}
        disabled={currentPage === Math.ceil(total / size)}
        className={`${small ? ' small' : ''}`}></Button>
    </div>
  )
}

export default Pagination
