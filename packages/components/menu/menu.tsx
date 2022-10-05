import React from 'react'

import { MenuProps } from './types'

const Menu = (props: MenuProps) => {
  const { children } = props
  let level = 0
  // const ele = React.Children.map(children, item => {
  //   console.log(item.props)
  //   if (!React.isValidElement(item)) {
  //     return null
  //   }
  //   const c = {
  //     ...item.props,
  //     level
  //   }
  //   return React.cloneElement(item, c)
  // })

  // console.log(ele)
  return <ul className='menu'>{children}</ul>
}

export default Menu
