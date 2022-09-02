import { Props } from '../components/message'

const body = document.getElementsByTagName('body')[0]

const show = (box: HTMLElement, { title, type }: Props) => {
  box.className = `box ${'message--' + type}`
  box.innerText = title
  body.appendChild(box)
  box.style.animation = 'myOpen .3s ease-in forwards'
}

const hidden = (box: HTMLElement, { duration }: Props) => {
  setTimeout(() => {
    box.style.animation = 'myClose .5s ease-out forwards'
  }, duration ?? 3000)
  setTimeout(() => {
    body.removeChild(box)
  }, duration ?? 3000)
}

function useMessage(props: Props) {
  const box = document.createElement('div')

  show(box, props)
  hidden(box, props)
}

export default useMessage
