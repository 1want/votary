import { createNamespace } from '../../utils/createNamespace'
import classNames from 'classnames'
import { InputProps } from './types'

const bem = createNamespace('input')

const Input = (props: InputProps) => {
  const { leftIcon, rightIcon, placeholder, onChange, type = 'text' } = props

  const classes = bem(classNames([!leftIcon && 'textIndent']))

  return (
    <div className='my-input'>
      {leftIcon && <span className={`iconfont icon-${leftIcon}`}></span>}
      <input
        className={classes}
        onChange={e => {
          onChange?.(e)
        }}
        type={type}
        placeholder={placeholder}
      />
      {rightIcon && <span className={`iconfont icon-${rightIcon}`}></span>}
    </div>
  )
}

export default Input
