import { useState } from 'react'
import { Radio, Drawer } from 'votary'

export default () => {
  const [drawerVisible, setDrawerVisible] = useState(false)
  const [direction, setDirection] = useState('top')

  return (
    <>
      <Radio.Group value='top' onChange={e => setDirection(e)}>
        <Radio value='top'>top</Radio>
        <Radio value='right'>right</Radio>
        <Radio value='bottom'>bottom</Radio>
        <Radio value='left'>left</Radio>
      </Radio.Group>

      <p onClick={() => setDrawerVisible(!drawerVisible)}>点击打开抽屉</p>

      <Drawer
        direction={direction}
        title='我是标题'
        visible={drawerVisible}
        onClose={() => setDrawerVisible(false)}>
        {direction.toUpperCase()}
      </Drawer>
    </>
  )
}
