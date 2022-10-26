import { useState, useRef, useEffect } from 'react'
import PopconfirmContent from './popconfirm-content'
import { PopconfirmProps } from './types'

const Popconfirm = (props: PopconfirmProps) => {
  const { children } = props
  const [visible, setVisible] = useState(false)
  const currentRef = useRef()
  let left = '200px',
    top = '100px'
  useEffect(() => {
    let d = currentRef.current
    // left = d?.offsetLeft + 'px'
    // top = d?.offsetTop + d?.clientHeight + 'px'
  }, [currentRef])

  return (
    <>
      <div onClick={() => setVisible(true)}>{children}</div>
      <PopconfirmContent {...props} visible={visible} setVisible={setVisible} />
    </>
  )
}

export default Popconfirm
