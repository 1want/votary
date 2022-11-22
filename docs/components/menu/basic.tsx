import { Menu } from '../../../packages/components/menu'

export default () => (
  <Menu>
    <Menu.Item icon='menu'>sasa</Menu.Item>
    <Menu.SubMenu title='Home' index='1' icon='house'>
      <Menu.Item icon='menu'>Option</Menu.Item>
      <Menu.Item>Option</Menu.Item>
      <Menu.Item>Option</Menu.Item>
    </Menu.SubMenu>
    <Menu.SubMenu title='Navigator' index='2' icon='menu'>
      <Menu.Item>Option</Menu.Item>
    </Menu.SubMenu>
  </Menu>
)
