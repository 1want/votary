import './index.css'

type Props = {
  type?: string
  leftIcon?: string
  rightIcon?: string
  placeholder?: string
  click?: () => void
}

const Input = (props: Props) => {
  const { leftIcon, rightIcon, placeholder } = props
  return (
    <div className='my-input'>
      {leftIcon && <div className='left-icon icon'>{leftIcon}</div>}
      <input className='input' type='text' placeholder={placeholder} />
      {rightIcon && <div className='right-icon icon'>{rightIcon}</div>}
    </div>
  )
}

export default Input
