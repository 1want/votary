import { Select } from '../../../packages/components/select'

const { Option } = Select

export default () => (
  <Select
    value='banner'
    onChange={v => {
      console.log(v)
    }}>
    <Option value='apple'>Apple</Option>
    <Option value='banner'>Banner</Option>
    <Option value='orange'>Orange</Option>
  </Select>
)
