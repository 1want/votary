import useMessage from '../../hooks/useMessage'
import './index.css'

export interface Props {
  title: string
  type?: string
  duration?: number
}

const Message = (props: Props) => {
  new useMessage(props)
}

export default Message
