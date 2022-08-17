import React from 'react'

import './index.css'

type Props = {
  title: string
  // type: 'success'
}

const body = document.getElementsByTagName('body')[0]
const span = document.createElement('span')

const show = (title: string) => {
  span.className = 'box'
  span.innerText = title
  body.appendChild(span)
  span.style.animation = 'myOpen .3s ease-in forwards'
  hidden()
}

const hidden = () => {
  setTimeout(() => {
    span.style.animation = 'myClose .5s ease-out forwards'
  }, 1500)
  setTimeout(() => {
    body.removeChild(span)
  }, 2000)
}

const Message = (props: any) => {
  show(props)
}

export default Message
