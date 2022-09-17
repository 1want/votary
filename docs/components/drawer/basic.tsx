import { useState } from 'react'
import { Drawer } from 'votary'

export default () => {
  const [drawerVisible, setDrawerVisible] = useState(false)

  return (
    <>
      <span onClick={() => setDrawerVisible(!drawerVisible)}>点击打开抽屉</span>

      <Drawer
        title='您的外卖正在送达中！'
        visible={drawerVisible}
        onClose={() => setDrawerVisible(false)}>
        点击查看详情
      </Drawer>
    </>
  )
}
