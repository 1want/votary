import { Menu } from '../../../packages/components/menu'

export default () => {
  return (
    <Menu>
      <Menu.SubMenu title='热带雨林' index='1' icon='sunny'>
        <Menu.Item>东南亚</Menu.Item>
        <Menu.Item>澳大利亚</Menu.Item>
        <Menu.SubMenu title='墨西哥' index='1-1'>
          <Menu.Item>东南亚</Menu.Item>
          <Menu.SubMenu title='墨西哥' index='1-1'>
            <Menu.Item>东南亚</Menu.Item>
          </Menu.SubMenu>
        </Menu.SubMenu>
      </Menu.SubMenu>
      <Menu.SubMenu title='温带雨林' index='2' icon='light-rain'>
        <Menu.Item>维多利亚</Menu.Item>
        <Menu.Item>新西兰岛</Menu.Item>
      </Menu.SubMenu>
    </Menu>
  )
}
