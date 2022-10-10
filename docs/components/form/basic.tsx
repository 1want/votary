import { Form } from '../../../packages/components/form'
import { Input } from '../../../packages/components/input'

export default () => (
  <Form>
    <Form.Item
      label='username'
      rules={[{ max: 6, message: '最多六位' }, { required: true }]}>
      <Input />
    </Form.Item>
    <Form.Item label='password'>
      <Input />
    </Form.Item>
  </Form>
)
