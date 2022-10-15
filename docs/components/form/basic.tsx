import { useRef } from 'react'
import { Form } from '../../../packages/components/form'
import { Input } from '../../../packages/components/input'
import { Button } from '../../../packages/components/button'

const submit = form => {
  form.Validate((isValid, errorMsg) => {
    if (isValid) {
      console.log('ok')
    } else {
      console.log('error', errorMsg)
    }
  })
}

export default () => {
  const ref = useRef()
  return (
    <Form ref={ref}>
      <Form.Item
        label='username'
        name='username'
        rules={[
          { max: 6, message: '最多六位' },
          { required: true, message: '请输入用户名' }
        ]}>
        <Input placeholder='input username' />
      </Form.Item>
      <Form.Item label='password' name='password'>
        <Input placeholder='input password' />
      </Form.Item>
      <Form.Item>
        <Button onClick={() => submit(ref.current)}>submit</Button>
      </Form.Item>
    </Form>
  )
}
