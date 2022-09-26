import { Button } from 'votary'
import { Notification } from '../../../packages/components/notification'

const msg = () => {
  Notification({
    title: '这里是标题',
    message: '我不会自动关闭'
  })
}

export default () => <Button onClick={msg}>通知</Button>
