import { useState } from 'react'
import { Mask } from '../../../packages/components/mask'
import './index.css'

export default () => {
  const [visible, setVisible] = useState(false)

  return (
    <>
      <span onClick={() => setVisible(true)}>点击打开遮罩层</span>
      <Mask visible={visible} onClick={() => setVisible(false)} blur>
        <div className='content'>Hello</div>
      </Mask>
    </>
  )
}
