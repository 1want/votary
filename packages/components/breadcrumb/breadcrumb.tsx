import React from 'react'
import { BreadcrumbProps } from './types'

const Breadcrumb = (props: BreadcrumbProps) => {
  const { children, separator, separatorIcon } = props

  return (
    <div className='v-breadcrumb'>
      {React.Children.map(children, child =>
        React.cloneElement(child, {
          separator,
          separatorIcon
        })
      )}
    </div>
  )
}

export default Breadcrumb
