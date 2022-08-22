import './index.css'

type Props = {
  type?: string
  leftIcon?: string
  rightIcon?: string
  placeholder?: string
  click?: () => void
  onChange?: () => {}
}

const Input = (props: Props) => {
  const { leftIcon, rightIcon, placeholder, onChange } = props
  return (
    <div className='my-input'>
      {leftIcon && <div className='left-icon icon'>{leftIcon}</div>}
      <input
        className='input'
        onChange={onChange}
        type='text'
        placeholder={placeholder}
      />
      {rightIcon && <div className='right-icon icon'>{rightIcon}</div>}
    </div>
  )
}

export default Input
