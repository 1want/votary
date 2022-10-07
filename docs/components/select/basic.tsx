import { Select } from 'votary'

const { Option } = Select

export default () => (
  <Select
    placeholder='请选择'
    onChange={v => {
      console.log(v)
    }}>
    <Option value='apple'>苹果</Option>
    <Option value='banner'>香蕉</Option>
    <Option value='orange'>橘子</Option>
  </Select>
)
