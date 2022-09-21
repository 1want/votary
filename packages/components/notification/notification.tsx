import { useState } from 'react'
import * as ReactDOMClient from 'react-dom/client'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

interface NoticeProps {
  title: string
  message?: string
  duration?: number
}

let add: (notice: NoticeProps) => void
let id = 0

const Notification = () => {
  const [notice, setNotice] = useState<object[]>([])
  add = notice => {
    id++
    notice.id = id
    setNotice(prevNotices => [...prevNotices, notice])

    if (notice.duration) {
      setTimeout(() => {
        remove(notice)
      }, notice.duration)
    }
  }

  const remove = notice => {
    setNotice(prevNotices => prevNotices.filter(item => item.id !== notice.id))
  }

  return (
    <TransitionGroup className='v-notification-wrapper'>
      {notice.map((item, index) => (
        <CSSTransition classNames='v-notification' timeout={400} key={index}>
          <div className='v-notification-content'>
            <div className='header'>
              <span className='title'>{item.title}</span>
              <span
                className='iconfont icon-cross'
                onClick={() => remove(item)}></span>
            </div>
            <div className='content'>{item.message}</div>
          </div>
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

ReactDOMClient.createRoot(el).render(<Notification />)

export { add }
