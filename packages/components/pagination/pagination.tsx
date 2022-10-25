import { useState } from 'react'
import { createNamespace } from '../../utils/createNamespace'
import classnames from 'classnames'
import { Button } from '../button'
import { Select } from '../select'
import { Icon } from '../../icon'
import usePagination from '../../hooks/usePagination'
import { arrayLast } from '../../utils/array'
import { PaginationProps } from './types'

const { Option } = Select

const Pagination = (props: PaginationProps) => {
  const {
    small = false,
    current = 1,
    total,
    size = 10,
    pageSize,
    sizeChange,
    onPageChange
  } = props
  const [currentPage, setCurrentPage] = useState(current)

  const pag = usePagination({
    total,
    currentPage,
    size
  }) as Array<number | string>

  const previous = () => {
    setCurrentPage(currentPage - 1)
    onPageChange?.(currentPage - 1)
  }

  const next = () => {
    setCurrentPage(currentPage + 1)
    onPageChange?.(currentPage + 1)
  }

  const skip = (index: number, currentPage: number) => {
    const last = arrayLast(pag)
    if (index >= currentPage) {
      if (currentPage + 5 > last) {
        setCurrentPage(last)
        onPageChange?.(last)
      } else {
        setCurrentPage(currentPage + 5)
        onPageChange?.(currentPage + 5)
      }
    } else {
      if (currentPage - 5 <= 0) {
        setCurrentPage(1)
        onPageChange?.(1)
      } else {
        setCurrentPage(currentPage - 5)
        onPageChange?.(currentPage - 5)
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
            onPageChange?.(item as number)
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
      <Select value='2'>
        <Option value='1'>10/page</Option>
        <Option value='2'>20/page</Option>
        <Option value='3'>30/page</Option>
      </Select>
      {/* <div className='size'>size</div> */}
    </div>
  )
}

export default Pagination
