import { Menu } from 'votary'

export default () => {
  return (
    <Menu>
      <Menu.SubMenu title='navigator' index='1' icon='s-operation'>
        <Menu.Item>option ...</Menu.Item>
        <Menu.Item>option ...</Menu.Item>
        <Menu.Item>option ...</Menu.Item>
      </Menu.SubMenu>
      <Menu.SubMenu title='navigator' index='2' icon='s-operation'>
        <Menu.Item>option ...</Menu.Item>
      </Menu.SubMenu>
    </Menu>
  )
}
