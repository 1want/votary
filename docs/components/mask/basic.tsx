import { useState } from 'react'
import { Mask } from '../../../packages/components/mask'
import { Button } from 'votary'

import './index.css'

export default () => {
  const [visible, setVisible] = useState(false)

  return (
    <>
      <Button onClick={() => setVisible(true)}>click me</Button>
      <Mask visible={visible} onClick={() => setVisible(false)} blur>
        <div className='content'>Hello</div>
      </Mask>
    </>
  )
}
