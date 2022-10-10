import { Button, Notification } from 'votary'

const msg = () => {
  Notification({
    title: '这里是标题',
    message: '我不会自动关闭'
  })
}

export default () => <Button onClick={msg}>click me</Button>
