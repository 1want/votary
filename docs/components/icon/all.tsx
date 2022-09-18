import { Icon } from '../../../packages/icon/index'
import { Icons } from '../../../packages/icon/icon'
import './index.css'

let items = Icons.map(item => {
  return (
    <div className='icon-content'>
      <Icon name={item}></Icon>
      <span className='icon-name'>{item}</span>
    </div>
  )
})
export default () => {
  return <div className='v-icon-box'>{items}</div>
}
