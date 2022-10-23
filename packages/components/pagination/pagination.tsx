import { useState } from 'react'
import { createNamespace } from '../../utils/createNamespace'
import classnames from 'classnames'
import { Button } from '../button'
import usePagination from '../../hooks/usePagination'
import { Icon } from '../../icon'
import { arrayLast } from '../../utils/array'
import { PaginationProps } from './types'

const Pagination = (props: PaginationProps) => {
  const {
    small = false,
    current = 1,
    total,
    size = 10,
    pageSize,
    sizeChange,
    pageChange
  } = props
  const [currentPage, setCurrentPage] = useState(current)

  const pag = usePagination({
    total,
    currentPage,
    size
  }) as Array<number | string>

  const previous = () => {
    setCurrentPage(currentPage - 1)
    pageChange?.(currentPage - 1)
  }

  const next = () => {
    setCurrentPage(currentPage + 1)
    pageChange?.(currentPage + 1)
  }

  const skip = (index: number, currentPage: number) => {
    const last = arrayLast(pag)
    if (index >= currentPage) {
      if (currentPage + 5 > last) {
        setCurrentPage(last)
        pageChange?.(last)
      } else {
        setCurrentPage(currentPage + 5)
        pageChange?.(currentPage + 5)
      }
    } else {
      if (currentPage - 5 <= 0) {
        setCurrentPage(1)
        pageChange?.(1)
      } else {
        setCurrentPage(currentPage - 5)
        pageChange?.(currentPage - 5)
      }
    }
  }

  const renderPagItem = () => {
    return pag?.map((item, index) => {
      const arrow =
        pag[index + 1] > currentPage ? 'd-arrow-right' : 'd-arrow-left'
      const classes = classnames([
        'number',
        currentPage === item && 'current',
        small && 'small'
      ])
      if (item === 'more') {
        return (
          <li
            className='omit'
            key={index}
            onClick={() => skip(pag[index + 1] as number, currentPage)}>
            <Icon name='more' className='more'></Icon>
            <Icon name={arrow} className='arrow'></Icon>
          </li>
        )
      }
      return (
        <li
          onClick={() => {
            pageChange?.(item as number)
            setCurrentPage(item as number)
          }}
          className={classes}
          key={index}>
          {item}
        </li>
      )
    })
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
