import { useEffect, useRef } from 'react'

import { SwiperProps } from './types'
const Swiper = (props: SwiperProps) => {
  const { children } = props
  let len = children.length

  const ref = useRef<HTMLDivElement | null>(null)
  let w = 0

  const fn = () => {
    let timer = setInterval(() => {
      ref.current!.style.transition = 'all .8s ease-out'

      w -= 320
      let s

      if (Math.abs(w) === len * 320) {
        clearTimeout(timer)

        w = 0
        s = w + 'px'
        ref.current!.style.transition = '0s'
        ref.current!.style.transform = `translateX(${s})`
        fn()
      } else {
        s = w + 'px'
        ref.current!.style.transform = `translateX(${s})`
      }
    }, 3000)
  }
  useEffect(() => {
    fn()
  }, [])

  return (
    <div className='v-swiper'>
      <div className='v-swiper-container' ref={ref}>
        {children}
      </div>
    </div>
  )
}

export default Swiper
