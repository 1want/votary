import { Button, Message } from 'votary'

const msg1 = () => {
  Message({
    title: '有些梦想虽然遥不可及，但不是不可能实现。',
    duration: 1500
  })
}

export default () => <Button onClick={msg1}>消息</Button>
