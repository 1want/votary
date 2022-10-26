import { useState } from 'react'
import classNames from 'classnames'
import { Icon } from '../../icon/index'
import { InputProps } from './types'

const Input = (props: InputProps) => {
  const { leftIcon, rightIcon, showPassword, type = 'text', ...other } = props

  const classes = classNames(['input', !leftIcon && 'textIndent'])

  const [pwdIcon, setPwdIcon] = useState(type)

  const toggleType = () => {
    setPwdIcon(pwdIcon === 'text' ? 'password' : 'text')
  }

  return (
    <div className='v-input'>
      {leftIcon && <Icon name={leftIcon} />}
      <input className={classes} type={pwdIcon} {...other} />
      {rightIcon && <Icon name={rightIcon} />}
      {showPassword && <Icon name='view' onClick={toggleType} />}
    </div>
  )
}

export default Input
