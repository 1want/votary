import { Menu } from '../../../packages/components/menu'

export default () => (
  <Menu uniqueOpened>
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
