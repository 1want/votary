import { useRef, useEffect, useState } from 'react'

function usePosition() {
  const ref = useRef<any>(null)

  const [domSize, setDomSize] = useState({
    width: '',
    height: ''
  })

  useEffect(() => {
    let h = ref.current.clientHeight
    let w = ref.current.clientWidth
    setDomSize({ width: w, height: h })
  }, [])

  return {
    ref,
    ...domSize
  }
}

export default usePosition
