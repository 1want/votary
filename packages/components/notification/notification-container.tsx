import { useState } from 'react'
import * as ReactDOMClient from 'react-dom/client'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { Notification } from './notification'
import { NoticeProps } from './types'

export let add: (notice: NoticeProps) => void
let id = 0

const NotificationContainer = () => {
  const [notice, setNotice] = useState<Array<NoticeProps>>([])
  add = notice => {
    id++
    notice.id = id
    setNotice(prevNotices => [...prevNotices, notice])

    if (notice.duration) {
      setTimeout(() => {
        remove(notice.id || 0)
      }, notice.duration)
    }
  }

  const remove = (id: number) => {
    setNotice(prevNotices => prevNotices.filter(item => item.id !== id))
  }

  return (
    <TransitionGroup className='v-notification-wrapper'>
      {notice.map(({ title, message, blur = true, id }) => (
        <CSSTransition classNames='v-notification' timeout={400} key={id}>
          <Notification
            title={title}
            message={message}
            id={id}
            blur={blur}
            remove={remove}></Notification>
        </CSSTransition>
      ))}
    </TransitionGroup>
  )
}

let el = document.querySelector('#message-wrapper')
if (!el) {
  el = document.createElement('div')
  el.className = 'message-wrapper'
  document.body.append(el)
}

ReactDOMClient.createRoot(el).render(<NotificationContainer />)
