import { useRef, useEffect, useState } from 'react'

function usePosition() {
  const ref = useRef<any>(null)

  const [domSize, setDomSize] = useState({
    width: '',
    height: '',
    x: '',
    y: ''
  })

  useEffect(() => {
    let h = ref.current.clientHeight
    let w = ref.current.clientWidth
    let x = ref.current.offsetLeft
    let y = ref.current.offsetTop

    setDomSize({ width: w, height: h, x, y })
  }, [])

  return {
    ref,
    ...domSize
  }
}

export default usePosition
