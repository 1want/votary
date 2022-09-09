import { useContext } from 'react'
import SelectContext from './select-context'

interface OptionProps {
  value?: string
  children?: any
}
const Option = (props: OptionProps) => {
  const { value: v, onChange, setShow, setValue } = useContext(SelectContext)
  const { value = '', children } = props

  const onClick = (e: any) => {
    e.stopPropagation()
    onChange?.(value)
    setShow?.(false)
    setValue?.(children)
  }

  return (
    <div
      className={`option${v === children ? ' is-select' : ''}`}
      onClick={onClick}>
      {children}
    </div>
  )
}

export default Option
