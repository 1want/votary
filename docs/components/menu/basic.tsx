import { Menu } from 'votary'

export default () => {
  return (
    <Menu>
      <Menu.SubMenu title='navigator' index='1' icon='house'>
        <Menu.Item>item-one</Menu.Item>
        <Menu.Item>item-two</Menu.Item>
        <Menu.Item>item-three</Menu.Item>
      </Menu.SubMenu>
      <Menu.SubMenu title='navigator' index='2' icon='house'>
        <Menu.Item>Apple</Menu.Item>
      </Menu.SubMenu>
    </Menu>
  )
}
