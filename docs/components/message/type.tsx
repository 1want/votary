import Message from '../../../packages/components/message'
import Button from '../../../packages/components/button'
// import '../../../packages/components/message/index.css'
// import '../../../packages/components/button/index.css'
import './index.css'

export default () => (
  <div className='button-demo'>
    <Button
      type='default'
      onClick={() =>
        Message({
          title: '有些梦想虽然遥不可及，但不是不可能实现。',
          type: 'info'
        })
      }>
      消息
    </Button>
    <Button
      type='success'
      onClick={() =>
        Message({
          title: '人们总是被命运安排，而我安排命运。',
          type: 'success'
        })
      }>
      成功
    </Button>
    <Button
      type='warning'
      onClick={() =>
        Message({
          title: '你什么也不肯放弃，又得到了什么？',
          type: 'warning'
        })
      }>
      警告
    </Button>
    <Button
      type='danger'
      onClick={() =>
        Message({
          title: '得到了不该得到的，就会失去不该失去的。',
          type: 'danger'
        })
      }>
      失败
    </Button>
  </div>
)
