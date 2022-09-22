import { Button, Message } from 'votary'

const msg1 = () => {
  Message({
    message: '有些梦想虽然遥不可及，但不是不可能实现。',
    duration: 2000
  })
}

export default () => <Button onClick={msg1}>消息</Button>
