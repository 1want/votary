import { useState } from 'react'
import RadioContext from './radio-context'

interface RadioProps {
  value?: string
  onChange?: (e) => void
  children?: any
}

const RadioGroup = (props: RadioProps) => {
  const { onChange, value, children } = props

  const [checked, setChecked] = useState(value)

  const toggle = (name: string) => {
    setChecked(name)
    onChange?.(name)
  }

  return (
    <RadioContext.Provider value={{ toggle, checked }}>
      <div className='v-radio'>{children}</div>
    </RadioContext.Provider>
  )
}

export default RadioGroup
