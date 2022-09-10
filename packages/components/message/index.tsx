import useMessage from '../../hooks/useMessage'
import './index.css'

export interface Props {
  title: string
  type?: string
  duration?: number
}

const Message = (props: Props) => {
  useMessage(props)
}

export { Message }
