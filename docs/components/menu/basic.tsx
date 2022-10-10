import { Menu } from 'votary'

export default () => {
  return (
    <Menu>
      <Menu.SubMenu title='fruits' index='1' icon='light-rain'>
        <Menu.Item>Apple</Menu.Item>
        <Menu.Item>Banner</Menu.Item>
        <Menu.Item>Orange</Menu.Item>
      </Menu.SubMenu>
      <Menu.SubMenu title='fruits' index='2' icon='sunny'>
        <Menu.Item>Apple</Menu.Item>
      </Menu.SubMenu>
    </Menu>
  )
}
