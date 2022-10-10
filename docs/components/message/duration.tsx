import { Button, Message } from 'votary'

const msg = () => {
  Message({
    message: '有些梦想虽然遥不可及，但不是不可能实现。',
    duration: 2000
  })
}

export default () => <Button onClick={msg}>click me</Button>
