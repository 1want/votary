// import Button from '@/components/button/button'
// import Message from '@/components/message'
// import { Button, Message, Input } from '../dist/hello.js'
import Button from '@/components/button'
import Input from '@/components/input'
import { Form, FormItem } from '@/components/form'

import '../dist/style.css'

function App() {
  return (
    <div className='App'>
      <Button type='success'></Button>
      <Form>
        <FormItem></FormItem>
        {/* <Form-item></Form-item> */}
      </Form>
    </div>
  )
}

export default App
