import { useState } from 'react'
import * as ReactDOMClient from 'react-dom/client'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { MessageContent } from './message-content'
import { MessageProps } from './types'

export let add: (message: MessageProps) => void
let id = 0

const MessageContainer = () => {
  const [notice, setNotice] = useState<Array<MessageProps>>([])

  add = notice => {
    id++
    notice.id = id

    setNotice(prevNotices => [...prevNotices, notice])
    setTimeout(() => {
      remove(notice)
    }, notice.duration || 3000)
  }

  const remove = (notice: MessageProps) => {
    setNotice(prevNotices => prevNotices.filter(item => item.id !== notice.id))
  }

  return (
    <TransitionGroup className='v-message-wrapper'>
      {notice.map(item => (
        <CSSTransition classNames='v-fade' timeout={400} key={item.id}>
          <MessageContent {...item} />
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

ReactDOMClient.createRoot(el).render(<MessageContainer />)
