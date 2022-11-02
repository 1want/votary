import { useEffect, useState } from 'react'

interface Props {
  from: { height?: number | string; width?: number | string }
  to: { height?: number | string; width?: number | string }
}

function useAnimation(props: Props) {
  const { from, to } = props
  const [height, setHeight] = useState(from.height)

  useEffect(() => {
    setHeight(to.height)
  }, [from, to])

  return {
    height,
    transition: '.4s'
  }
}

export default useAnimation
