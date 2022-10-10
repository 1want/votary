import { Radio } from 'votary'

const onChange = e => {
  console.log(e)
}

export default () => (
  <>
    <Radio.Group value='orange' onChange={onChange}>
      <Radio value='apple'>Apple</Radio>
      <Radio value='banner'>Banner</Radio>
      <Radio value='orange'>Orange</Radio>
    </Radio.Group>
  </>
)
