import { Button, Notification } from 'votary'

const msg = () => {
  Notification({
    title: '这里是标题',
    message: '三秒后自动关闭',
    duration: 3000,
    blur: false
  })
}

export default () => <Button onClick={msg}>click me</Button>
