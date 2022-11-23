import { Menu } from 'votary'

export default () => (
  <Menu>
    <Menu.SubMenu title='Home' icon='house'>
      <Menu.Item>Option</Menu.Item>
      <Menu.Item>Option</Menu.Item>
      <Menu.Item>Option</Menu.Item>
    </Menu.SubMenu>
    <Menu.SubMenu title='Navigator' icon='menu'>
      <Menu.Item>Option</Menu.Item>
    </Menu.SubMenu>
    <Menu.Item icon='setting'>Setting</Menu.Item>
  </Menu>
)
