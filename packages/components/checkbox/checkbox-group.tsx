import { useState } from 'react'
import RadioContext from './checkbox-context'

import { RadioGroupProps } from './types'

const RadioGroup = (props: RadioGroupProps) => {
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
