import { useEffect, useRef } from 'react'
import { SwiperItemProps } from './types'

let len = 0
const Swiper = (props: SwiperItemProps) => {
  const { children } = props
  len++

  const refs = useRef()

  useEffect(() => {
    let w = 0

    setInterval(() => {
      w -= 200
      let s = w + 'px'
      if (Math.abs(w) === len * 200) {
        w = 0
        s = 0 + 'px'
      }
      refs.current.style.transform = `translateX(${s})`
      refs.current.style.transition = 'all 2s ease-out'
    }, 2000)
  }, [])

  return (
    <div ref={refs} className='v-swiper-item'>
      {children}
    </div>
  )
}

export default Swiper
