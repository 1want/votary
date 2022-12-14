import { useState } from 'react'
import { Loading } from 'votary'

export default () => {
  const [visible, setVisible] = useState(false)

  return (
    <div>
      <span onClick={() => setVisible(true)}>点击打开Loading</span>
      <Loading visible={visible} onClose={() => setVisible(false)}></Loading>
    </div>
  )
}
