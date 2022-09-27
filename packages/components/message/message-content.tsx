import classNames from 'classnames'
import { createNamespace } from '../../utils/createNamespace'

import { MessageProps } from './types'

const bem = createNamespace('message')

const MessageContent = (props: MessageProps) => {
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

export { MessageContent }
