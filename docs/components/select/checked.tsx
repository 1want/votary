import { Select } from '../../../packages/components/select'

const { Option } = Select

export default () => (
  <Select
    value='orange'
    onChange={v => {
      console.log(v)
    }}>
    <Option value='apple'>苹果</Option>
    <Option value='banner'>香蕉</Option>
    <Option value='orange'>橘子</Option>
  </Select>
)
