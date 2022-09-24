import { NoticeProps } from './types'

const Notification = (props: NoticeProps) => {
  const { title, message, id, blur, remove } = props

  return (
    <div className={`v-notification-content ${blur && 'v-notification-blur'}`}>
      <div className='header'>
        <span className='title'>{title}</span>
        <span
          className='iconfont icon-close'
          onClick={() => remove?.(id)}></span>
      </div>
      <div className='content'>{message}</div>
    </div>
  )
}

export { Notification }
