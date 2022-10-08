import { TableColumnProps } from './types'

const Swiper = (props: TableColumnProps) => {
  const { children, label, prop } = props

  return <td className='column-item'>{label}</td>
}

export default Swiper
