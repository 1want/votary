import { createNamespace } from '../../utils/createNamespace'
import classNames from 'classnames'
import { MessageProps } from './types'

const bem = createNamespace('message')

const Message = (props: MessageProps) => {
  const { message, type = 'info' } = props
  let icon = 'iconfont '

  switch (type) {
    case 'info':
      icon += 'icon-info'
      break
    case 'success':
      icon += 'icon-success'
      break
    case 'warning':
      icon += 'icon-warning'
      break
    case 'error':
      icon += 'icon-error'
      break
  }
  console.log(icon)
  const classes = bem(classNames([type]))

  return (
    <div className={classes}>
      <span className={icon}></span>
      <span className='v-message-title'>{message}</span>
    </div>
  )
}

export { Message }
