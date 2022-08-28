// import Button from '@/components/button/button'
// import Message from '@/components/message'
// import { Button, Message, Input } from '../dist/hello.js'
import Button from '@/components/button'
import Input from '@/components/input'
import Form from '@/components/form'
import Divider from '@/components/divider'

import '../dist/style.css'

function App() {
  return (
    <div className='App'>
      <Divider></Divider>
      <Divider dotted></Divider>
      <Divider>hello</Divider>
    </div>
  )
}

export default App
