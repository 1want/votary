import '../packages/icon/assets/iconfont.css'
import { useState } from 'react'
// import Button from '@/components/button/button'
// import Message from '@/components/message'
// import { Button, Message, Input } from '../dist/hello.js'
// import Button from '@/components/button'
// import Input from '@/components/input'
// import Form from '@/components/form'
// import Divider from '@/components/divider'
// import Dialog from '@/components/dialog'
// import Loading from '@/components/loading'
// import Radio from '@/components/radio'
// import Select from '@/components/select'
// import Upload from '@/components/upload'
// import Swiper from '@/components/swiper'
// import Menu, { MenuItem, SubMenu } from '@/components/menu'
import '../dist/style.css'

// import { Button, Message } from '../dist/votary.js'
import { Button, Message } from 'votary'

function App() {
  const [username, setUsername] = useState('')
  return (
    <div>
      <Button type='primary' onClick={() => Message({ title: 'sahjksa' })}>
        btn
      </Button>
      {/* <Menu>
        <MenuItem>菜单一</MenuItem>
        <MenuItem>菜单二</MenuItem>
        <SubMenu>
          <MenuItem>菜单一</MenuItem>
          <MenuItem>菜单二</MenuItem>
        </SubMenu>
      </Menu> */}
    </div>
  )
}

export default App
