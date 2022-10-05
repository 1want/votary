import { SwiperProps } from './types'
const Swiper = (props: SwiperProps) => {
  const { children } = props

  return <div className='v-swiper'>{children}</div>
}

export default Swiper
