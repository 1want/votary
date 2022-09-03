import Loading from '../../../packages/components/loading'
import { useState } from 'react'

export default () => {
  const [show, setShow] = useState(false)
  setTimeout(() => {
    setShow(false)
  }, 3000)
  return (
    <div>
      <span onClick={() => setShow(true)}>点击打开Loading</span>
      <Loading show={show}></Loading>
    </div>
  )
}
