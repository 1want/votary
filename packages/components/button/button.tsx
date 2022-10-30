import classnames from 'classnames'
import { createNamespace } from '../../utils/createNamespace'
import { Icon } from '../../icon'
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
      {icon && <Icon name={icon}></Icon>}
      {children && (
        <span className={`icon-text ${icon && 'hasicon'}`}>{children}</span>
      )}
    </button>
  )
}

export default Button
