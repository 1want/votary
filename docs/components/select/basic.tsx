import Select from '../../../packages/components/select'

export default () => {
  const { Option } = Select

  return (
    <>
      <Select
        onChange={e => {
          console.log(e)
        }}>
        <Option value='apple'>苹果</Option>
        <Option value='banner'>香蕉</Option>
      </Select>
    </>
  )
}
