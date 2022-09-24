import { useState, useRef, createRef } from 'react'
import * as ReactDOMClient from 'react-dom/client'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import { Message } from './message'
import { MessageProps } from './types'

export let add: (message: MessageProps) => void
let id = 0
let seed = -1

const MessageContainer = () => {
  const [notice, setNotice] = useState<Array<MessageProps>>([])
  const msgRef = createRef()

  add = notice => {
    seed++
    id++
    notice.id = id

    setNotice(prevNotices => [...prevNotices, notice])

    setTimeout(() => {
      remove(notice)
    }, notice.duration || 3000)
  }

  const remove = (notice: MessageProps) => {
    seed--
    setNotice(prevNotices => prevNotices.filter(item => item.id !== notice.id))
  }

  return (
    <TransitionGroup className='v-message-wrapper'>
      {notice.map(({ message, id, type = 'info' }) => (
        <CSSTransition classNames='v-fade' timeout={400} key={id}>
          <Message message={message} type={type}></Message>
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
