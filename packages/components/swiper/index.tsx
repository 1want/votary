import _Swiper from './swiper'
import SwiperItem from './swiper-item'
import './style/index.less'

const Swiper = Object.assign(_Swiper, { Item: SwiperItem })

export { Swiper }
