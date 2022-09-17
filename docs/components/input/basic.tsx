import { useState } from 'react'
import { Input } from 'votary'

export default () => {
  const [username, setUsername] = useState('')
  return (
    <Input
      placeholder='想写点什么吗?'
      value={username}
      onChange={text => setUsername(text)}
    />
  )
}
