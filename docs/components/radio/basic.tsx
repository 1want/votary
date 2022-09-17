import { Radio } from 'votary'

export default () => {
  return (
    <>
      <Radio.Group>
        <Radio value='apple'>苹果</Radio>
        <Radio value='banner'>香蕉</Radio>
        <Radio value='orange'>橘子</Radio>
      </Radio.Group>
    </>
  )
}
