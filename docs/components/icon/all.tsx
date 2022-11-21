import { Icon } from 'votary'
import { Icons } from '../../../packages/icon/icon'

import './index.less'

let items = Icons.map(item => (
  <div className='icon-content' key={item}>
    <Icon name={item}></Icon>
    <span className='icon-name'>{item}</span>
  </div>
))
export default () => <div className='v-icon-box'>{items}</div>
