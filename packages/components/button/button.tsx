import classnames from 'classnames'
import { createNamespace } from '../../utils/createNamespace'
import { ButtonProps } from './types'

const bem = createNamespace('button')

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
      {icon && <span className={`iconfont icon-${icon}`}></span>}
      {children && <span className='icon-text'>{children}</span>}
    </button>
  )
}

export default Button
