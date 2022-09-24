import { Button, Notification } from 'votary'

const msg2 = () => {
  Notification({
    title: '这里是标题',
    message: '三秒后自动关闭',
    duration: 3000,
    blur: false
  })
}

export default () => <Button onClick={msg2}>通知</Button>
