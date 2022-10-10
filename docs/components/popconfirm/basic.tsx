import { Popconfirm } from '../../../packages/components/popconfirm'

const onCancel = () => {}
const onConfirm = () => {}

export default () => (
  <Popconfirm
    title='pop'
    confirm-text='确认'
    cancel-text='取消'
    onCancel={onCancel}
    onConfirm={onConfirm}>
    click me
  </Popconfirm>
)
