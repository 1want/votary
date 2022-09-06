import { ButtonType, ButtonSize } from './types'
import classnames from 'classnames'
import { createNamespace } from '../../utils/createNamespace'
import './index.css'

const bem = createNamespace('button')

interface ButtonProps {
  type?: ButtonType
  size?: ButtonSize
  hairline?: boolean
  plain?: boolean
  children?: any
  className?: string
  onClick?: () => void
}

const Button = (props: ButtonProps) => {
  const {
    type = 'default',
    size = 'normal',
    hairline,
    plain,
    children,
    className,
    onClick
  } = props

  const classes = bem(
    classnames([type, size, hairline && 'hairline', plain && 'plain']),
    className
  )

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  )
}

export default Button
