import { useEffect, useState } from 'react'
import RadioContext from './checkbox-context'

import { CheckboxGroupProps } from './types'

const RadioGroup = (props: CheckboxGroupProps) => {
  const { onChange, value = [], children } = props

  const [checked, setChecked] = useState<Array<string>>(value)

  const choose = (name: string) => {
    let index = checked.indexOf(name)
    if (index !== -1) {
      let copy = checked.slice()
      copy.splice(index, 1)
      setChecked(copy)
    } else {
      setChecked(item => [...item, name])
    }
  }

  useEffect(() => {
    onChange?.(checked)
  }, [checked])

  return (
    <RadioContext.Provider value={{ choose, checked, onChange }}>
      <div className='v-radio'>{children}</div>
    </RadioContext.Provider>
  )
}

export default RadioGroup
