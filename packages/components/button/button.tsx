import { ButtonType, ButtonSize } from './types'
import classnames from 'classnames'
import { createNamespace } from '../../utils/createNamespace'

const bem = createNamespace('button')

interface ButtonProps {
  type?: ButtonType
  size?: ButtonSize
  icon?: string
  hairline?: boolean
  plain?: boolean
  disabled?: boolean
  children?: any
  className?: string
  onClick?: () => any
}

const Button = (props: ButtonProps) => {
  const {
    type = 'default',
    size = 'normal',
    icon,
    hairline,
    plain,
    disabled = false,
    children,
    className,
    onClick
  } = props

  const classes = bem(
    classnames([
      type,
      size,
      hairline && 'hairline',
      plain && 'plain',
      disabled && 'disabled'
    ]),
    className
  )

  return (
    <button disabled={disabled} onClick={onClick} className={classes}>
      <span className={`iconfont icon-${icon}`}></span>
      {children}
    </button>
  )
}

export default Button
