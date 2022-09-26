import classNames from 'classnames'
import { createNamespace } from '../../utils/createNamespace'
import { NoticeProps } from './types'

const bem = createNamespace('notification')

const NotificationContent = (props: NoticeProps) => {
  const { title, message, blur = true, remove } = props

  const classes = bem(classNames([blur && 'blur']))

  return (
    <div className={classes}>
      <div className='header'>
        <span className='title'>{title}</span>
        <span
          className='iconfont icon-close'
          onClick={() => remove?.(props)}></span>
      </div>
      <div className='content'>{message}</div>
    </div>
  )
}

export { NotificationContent }
