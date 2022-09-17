import { Form, Input } from 'votary'

export default () => (
  <Form>
    <Form.Item
      label='账号'
      rules={[{ max: 6, message: '最多六位' }, { required: true }]}>
      <Input placeholder='请输入账号' />
    </Form.Item>
    <Form.Item label='密码'>
      <Input placeholder='请输入密码' />
    </Form.Item>
  </Form>
)
