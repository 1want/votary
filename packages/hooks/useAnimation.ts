import { useEffect, useState } from 'react'

interface FromProps {
  height?: number | string
  width?: number | string
  opacity?: number
  display?: string
}

interface ToProps {
  height?: number | string
  width?: number | string
  opacity?: number
  display?: string
}

function useAnimation({ from, to }: { from: FromProps; to: ToProps }) {
  const [style, setStyle] = useState({ ...from })

  useEffect(() => {
    setStyle({ ...to })
  }, [to.height, to.width, to.opacity])

  return {
    ...style,
    transition: 'all .4s'
  }
}

export default useAnimation
