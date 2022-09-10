import { Radio } from '../../../packages/components/radio'

export default () => {
  return (
    <>
      <Radio.Group
        value='orange'
        onChange={e => {
          console.log(e)
        }}>
        <Radio value='apple'>苹果</Radio>
        <Radio value='banner'>香蕉</Radio>
        <Radio value='orange'>橘子</Radio>
      </Radio.Group>
    </>
  )
}
