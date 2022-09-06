import { Props } from '../components/message'

const body = document.getElementsByTagName('body')[0]
let seed = 0
const instance = []

const show = (box: HTMLElement, { title, type }: Props) => {
  seed++
  instance.push({
    dom: box,
    id: seed
  })
  box.className = `v-message v-${'message--' + type}`
  box.innerText = title
  body.appendChild(box)
  box.style.animation = 'myOpen .3s ease-in forwards'
  box.style.top = (seed - 1) * 65 + 'px'
}

const hidden = (box: HTMLElement, duration = 3000) => {
  setTimeout(() => {
    box.style.animation = 'myClose .3s ease-in forwards'
    // seed--
    // let id = --seed

    // instance[id].dom.style.top = (seed - 1) * 65 + 'px'

    setTimeout(() => {
      body.removeChild(box)
    }, 200)
  }, duration)
}

function useMessage(props: Props) {
  const box = document.createElement('div')

  show(box, props)
  hidden(box, props.duration)
}

export default useMessage
