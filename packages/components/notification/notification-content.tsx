import classNames from 'classnames'
import { createNamespace } from '../../utils/createNamespace'
import { Header, Content } from '../common'

import { NoticeProps } from './types'

const bem = createNamespace('notification')

const NotificationContent = (props: NoticeProps) => {
  const { title, message, blur = true, remove } = props

  const classes = bem(classNames([{ blur }]))

  return (
    <div className={classes}>
      <Header title={title} onClose={() => remove?.(props)} />
      <Content children={message} />
    </div>
  )
}

export { NotificationContent }
