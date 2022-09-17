interface Props {
  type?: string
  leftIcon?: string
  rightIcon?: string
  placeholder?: string
  click?: () => void
  value?: any
  onChange?: (text: string) => void
}

const Input = (props: Props) => {
  const { leftIcon, rightIcon, placeholder, onChange } = props
  return (
    <div className='my-input'>
      {leftIcon && <span className={`iconfont icon-${leftIcon}`}></span>}
      <input
        className={`input ${!leftIcon && 'textIndent'}`}
        onChange={e => {
          onChange?.(e.target.value)
        }}
        type='text'
        placeholder={placeholder}
      />
      {rightIcon && <span className={`iconfont icon-${rightIcon}`}></span>}
    </div>
  )
}

export default Input
