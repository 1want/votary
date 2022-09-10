import { Props } from '../components/message'

const body = document.getElementsByTagName('body')[0]
let seed = 0
let instance: HTMLElement
const instances = []

const show = (box: HTMLElement, { title, type }: Props) => {
  seed++

  box.className = `v-message v-${'message--' + (type || 'info')}`
  box.innerText = title
  body.appendChild(box)
  box.style.animation = 'myOpen .3s ease-in forwards'
  let top = seed * 65 + 'px'
  box.style.top = top
}

const hidden = (box: HTMLElement, duration = 3000) => {
  setTimeout(() => {
    box.style.animation = 'myClose .3s ease-in forwards'
    seed--

    setTimeout(() => {
      body.removeChild(box)
    }, 200)
  }, duration)
}

function useMessage(props: Props) {
  const box = document.createElement('div')
  instance = box
  show(box, props)
  hidden(box, props.duration)
}

export default useMessage
