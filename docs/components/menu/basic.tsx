import { Menu } from '../../../packages/components/menu'

export default () => {
  return (
    <Menu>
      <Menu.SubMenu title='一年级一班' index='1' icon='house'>
        <Menu.Item>101</Menu.Item>
        <Menu.Item>102</Menu.Item>
      </Menu.SubMenu>
      <Menu.SubMenu title='一年级二班' index='2' icon='message'>
        <Menu.Item>201</Menu.Item>
      </Menu.SubMenu>
    </Menu>
  )
}
