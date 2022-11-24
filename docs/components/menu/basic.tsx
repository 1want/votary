import { Menu } from 'votary'

export default () => (
  <Menu uniqueOpened>
    <Menu.SubMenu title='Home' index='1' icon='house'>
      <Menu.Item>Option</Menu.Item>
      <Menu.Item>Option</Menu.Item>
      <Menu.Item>Option</Menu.Item>
    </Menu.SubMenu>
    <Menu.SubMenu title='Navigator' index='2' icon='menu'>
      <Menu.Item>Option</Menu.Item>
    </Menu.SubMenu>
    <Menu.Item icon='setting'>Setting</Menu.Item>
  </Menu>
)
