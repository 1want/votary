import { Button, Notification } from 'votary'

const msg1 = () => {
  Notification({
    title: '这里是标题',
    message: '我不会自动关闭'
  })
}

const msg2 = () => {
  Notification({
    title: '这里是标题',
    message: '三秒后自动关闭',
    duration: 3000
  })
}

export default () => (
  <>
    <Button onClick={msg1}>通知</Button>
    <Button onClick={msg2}>通知</Button>
  </>
)
