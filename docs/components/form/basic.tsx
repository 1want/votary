import { useRef } from 'react'
import { Form } from '../../../packages/components/form'
import { Input } from '../../../packages/components/input'
import { Button } from '../../../packages/components/button'

const submit = form => {
  form.current.ValidateRules().then(res => {
    console.log(res)
  })
}

export default () => {
  const ref = useRef()
  return (
    <Form ref={ref}>
      <Form.Item
        label='username'
        rules={[{ max: 6, message: '最多六位' }, { required: true }]}>
        <Input placeholder='input username' />
      </Form.Item>
      <Form.Item label='password'>
        <Input placeholder='input password' />
      </Form.Item>
      <Form.Item>
        <Button onClick={() => submit(ref)}>submit</Button>
      </Form.Item>
    </Form>
  )
}
