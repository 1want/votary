import { createNamespace } from '../../utils/createNamespace'
import classNames from 'classnames'
import { MessageProps } from './types'
import { forwardRef } from 'react'

const bem = createNamespace('message')

const Message = (props: MessageProps) => {
  const { message, type = 'info' } = props
  let icon = ''

  switch (type) {
    case 'info':
      icon = 'iconfont icon-info'
      break
    case 'success':
      icon = 'iconfont icon-success'
      break
    case 'warning':
      icon = 'iconfont icon-warning'
      break
    case 'error':
      icon = 'iconfont icon-error'
      break
  }
  const classes = bem(classNames([type]))

  return (
    <div className={classes}>
      <span className={icon}></span>
      <span className='v-message-title'>{message}</span>
    </div>
  )
}

export { Message }
