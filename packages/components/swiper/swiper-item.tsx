import { SwiperItemProps } from './types'

const Swiper = (props: SwiperItemProps) => {
  const { children } = props

  return <div className='v-swiper-item'>{children}</div>
}

export default Swiper
