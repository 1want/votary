import { Checkbox } from 'votary'

export default () => (
  <Checkbox.Group
    value={['apple', 'banner']}
    onChange={e => {
      console.log(e)
    }}>
    <Checkbox value='apple'>苹果</Checkbox>
    <Checkbox value='banner'>香蕉</Checkbox>
    <Checkbox value='orange'>橘子</Checkbox>
  </Checkbox.Group>
)