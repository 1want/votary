import { useState } from 'react'
import { Drawer } from 'votary'

export default () => {
  const [drawerVisible, setDrawerVisible] = useState(false)

  return (
    <>
      <span onClick={() => setDrawerVisible(!drawerVisible)}>
        点击打开Drawer
      </span>

      <Drawer
        title='抽屉'
        visible={drawerVisible}
        onClose={() => setDrawerVisible(false)}>
        321
      </Drawer>
    </>
  )
}
