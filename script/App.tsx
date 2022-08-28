// import Button from '@/components/button/button'
// import Message from '@/components/message'
// import { Button, Message, Input } from '../dist/hello.js'
import Button from '@/components/button'
import Input from '@/components/input'
import Form from '@/components/form'

import '../dist/style.css'

const onFinish = e => {
  console.log(e, 'ok')
}
function App() {
  return (
    <div className='App'>
      <Form onFinish={onFinish}>
        <Form.Item
          label='用户名'
          name='username'
          rules={[
            { required: true, message: 'hello' },
            { max: 6, message: '最多输入六位' }
          ]}>
          <Input />
        </Form.Item>
        <Form.Item label='密码' name='password'>
          <Input />
        </Form.Item>
        <Button type='success' plain hairline></Button>
      </Form>

      <Form onFinish={onFinish}>
        <Form.Item
          label='水果'
          name='username'
          rules={[
            { required: true, message: 'hello wor' },
            { max: 6, message: '最多输入六位' }
          ]}>
          <Input />
        </Form.Item>
        <Form.Item label='价格' name='password'>
          <Input />
        </Form.Item>
        <Button type='success'></Button>
      </Form>
    </div>
  )
}

export default App
