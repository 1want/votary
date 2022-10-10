import { useState } from 'react'
import { Input } from '../../../packages/components/input'

export default () => {
  const [username, setUsername] = useState('')
  return (
    <Input
      placeholder='input ...'
      value={username}
      onChange={text => setUsername(text)}
    />
  )
}
