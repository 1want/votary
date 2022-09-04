// import Button from '@/components/button/button'
import Message from '@/components/message'
// import { Button, Message, Input } from '../dist/hello.js'
import Button from '@/components/button'
import Input from '@/components/input'
import Form from '@/components/form'
import Divider from '@/components/divider'
import Dialog from '@/components/dialog'
import Loading from '@/components/loading'
import Radio from '@/components/radio'
import Select from '@/components/select'
import Upload from '@/components/upload'
import '../packages/icon/assets/iconfont.css'
import { useState } from 'react'

// import '../dist/style.css'

const { Option } = Select

function App() {
  const [username, setUsername] = useState('')
  return (
    <div>
      <Input value={username} onChange={text => setUsername(text)}></Input>
      <Button
        type='primary'
        onClick={() => {
          console.log(username)
        }}>
        btn
      </Button>
    </div>
  )
}

export default App
