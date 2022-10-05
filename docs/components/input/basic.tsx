import { useState } from 'react'
import { Input } from '../../../packages/components/input'

export default () => {
  const [username, setUsername] = useState('')
  return (
    <Input
      placeholder='咸鱼就是咸鱼'
      value={username}
      onChange={text => setUsername(text)}
    />
  )
}
