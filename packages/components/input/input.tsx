import { useState } from 'react'
import classNames from 'classnames'
import { Icon } from '../../icon/index'
import { InputProps } from './types'

const Input = (props: InputProps) => {
  const {
    leftIcon,
    rightIcon,
    placeholder = 'input ...',
    showPassword,
    onChange,
    type = 'text'
  } = props

  const classes = classNames(['input', !leftIcon && 'textIndent'])

  const [pwdIcon, setPwdIcon] = useState(type)

  const toggleType = () => {
    setPwdIcon(pwdIcon === 'text' ? 'password' : 'text')
  }

  const renderInput = () => (
    <input
      className={classes}
      onChange={onChange}
      type={pwdIcon}
      placeholder={placeholder}
    />
  )

  return (
    <div className='v-input'>
      {leftIcon && <Icon name={leftIcon} />}
      {renderInput()}
      {rightIcon && <Icon name={rightIcon} />}
      {showPassword && <Icon name='view' onClick={toggleType} />}
    </div>
  )
}

export default Input
