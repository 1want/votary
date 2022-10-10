import { Checkbox } from 'votary'

export default () => (
  <Checkbox.Group
    value={['apple', 'banner']}
    onChange={e => {
      console.log(e)
    }}>
    <Checkbox value='apple'>Apple</Checkbox>
    <Checkbox value='banner'>Banner</Checkbox>
    <Checkbox value='orange'>Orange</Checkbox>
  </Checkbox.Group>
)
