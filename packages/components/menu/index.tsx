import _Menu from './menu'
import SubMenu from './sub-menu'
import MenuItem from './menu-item'
import './style/index.less'

const Menu = Object.assign(_Menu, { SubMenu, Item: MenuItem })
export { Menu }
