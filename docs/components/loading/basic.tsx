import Loading from '../../../packages/components/loading'
import { useState } from 'react'

// const dialogVisible = false
export default () => {
  const [show, setShow] = useState(false)
  return (
    <div>
      <p onClick={() => setShow(true)}>点击打开Loading</p>
      <Loading show={show}></Loading>
    </div>
  )
}
