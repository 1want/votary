import { Button, Message } from 'votary'

const msg1 = () => {
  Message({
    message: '有些梦想虽然遥不可及，但不是不可能实现。'
  })
}

const msg2 = () => {
  Message({
    message: '人们总是被命运安排，而我安排命运。',
    type: 'success'
  })
}

const msg3 = () => {
  Message({
    message: '如果没有龙，屠龙的剑又有什么价值呢？',
    type: 'warning'
  })
}

const msg4 = () => {
  Message({
    message: '得到了不该得到的，就会失去不该失去的。',
    type: 'error'
  })
}

export default () => (
  <>
    <Button onClick={msg1}>提示</Button>
    <Button onClick={msg2}>提示</Button>
    <Button onClick={msg3}>提示</Button>
    <Button onClick={msg4}>提示</Button>
  </>
)
