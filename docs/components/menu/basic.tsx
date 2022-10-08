import { Menu } from 'votary'

export default () => {
  return (
    <Menu>
      <Menu.SubMenu title='水果' index='1' icon='light-rain'>
        <Menu.Item>苹果</Menu.Item>
        <Menu.Item>香蕉</Menu.Item>
        <Menu.Item>橘子</Menu.Item>
      </Menu.SubMenu>
      <Menu.SubMenu title='蔬菜' index='2' icon='sunny'>
        <Menu.SubMenu title='白菜' index='1-1'>
          <Menu.Item>大白菜</Menu.Item>
          <Menu.Item>小白菜</Menu.Item>
        </Menu.SubMenu>
        <Menu.Item>西红柿</Menu.Item>
      </Menu.SubMenu>
    </Menu>
  )
}
