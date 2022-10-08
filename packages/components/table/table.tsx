import React from 'react'
import { TableProps } from './types'

const Table = (props: TableProps) => {
  const { children, data = [] } = props

  return (
    <div className='v-table'>
      <table>
        <colgroup></colgroup>
        <thead>
          <tr className='header'>{children}</tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className='column'>
              {React.Children.map(children, child =>
                React.cloneElement(child, {
                  label: child.props.prop && item[child.props.prop]
                })
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table
