import { Menu } from '../../../packages/components/menu'

export default () => {
  return (
    <Menu>
      <Menu.SubMenu title='通用配置' index='1' icon='house'>
        <Menu.Item>1</Menu.Item>
        <Menu.Item>2</Menu.Item>
      </Menu.SubMenu>
      <Menu.SubMenu title='系统设置' index='2' icon='message'>
        <Menu.Item>3</Menu.Item>
      </Menu.SubMenu>
    </Menu>
  )
}
