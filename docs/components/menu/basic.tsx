import { Menu } from '../../../packages/components/menu'

export default () => {
  return (
    <Menu>
      <Menu.SubMenu title='雨' index='1' icon='light-rain'>
        <Menu.Item>阵雨</Menu.Item>
        <Menu.Item>雷雨</Menu.Item>
        <Menu.SubMenu title='细雨' index='1-1'>
          <Menu.Item>微雨</Menu.Item>
        </Menu.SubMenu>
      </Menu.SubMenu>
      <Menu.SubMenu title='晴' index='2' icon='sunny'>
        <Menu.Item>晴爽</Menu.Item>
        <Menu.Item>晴和</Menu.Item>
      </Menu.SubMenu>
      <Menu.SubMenu title='雾' index='3' icon='sunrise'>
        <Menu.Item>淡雾</Menu.Item>
      </Menu.SubMenu>
    </Menu>
  )
}
