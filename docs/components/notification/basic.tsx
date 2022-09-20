import { Notification } from '../../../packages/components/notification'
import { Button } from 'votary'

const msg1 = () => {
  Notification({
    title:
      '秦时明月秦时明月秦时明月秦时明月秦时明月秦时明月秦时明月秦时明月秦时明月',
    message:
      '有些梦想虽然遥不可及，但不是不可能实现。秦时明月秦时明月秦时明月秦时明月秦时明月秦时明月秦时明月'
  })
}

const msg2 = () => {
  Notification({
    title: '人们总是被命运安排，而我安排命运。'
  })
}

const msg3 = () => {
  Notification({
    title: '如果没有龙，屠龙的剑又有什么价值呢？'
  })
}

const msg4 = () => {
  Notification({
    title: '得到了不该得到的，就会失去不该失去的。'
  })
}

export default () => (
  <>
    <Button onClick={msg1}>消息</Button>
    <Button onClick={msg2}>成功</Button>
    <Button onClick={msg3}>警告</Button>
    <Button onClick={msg4}>失败</Button>
  </>
)
