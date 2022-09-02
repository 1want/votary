// import Button from '@/components/button/button'
import Message from '@/components/message'
// import { Button, Message, Input } from '../dist/hello.js'
import Button from '@/components/button'
import Input from '@/components/input'
import Form from '@/components/form'
import Divider from '@/components/divider'
import './index.css'

// import '../dist/style.css'

function App() {
  return (
    <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde minus veniam
      fuga eveniet ad commodi ducimus, iusto inventore, architecto ullam impedit
      fugit! Quibusdam sapiente praesentium dolore officia error culpa fugiat?
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia, quas.
      Accusamus libero nemo quia dicta, id magni animi ipsam sapiente, sunt
      necessitatibus nobis perspiciatis aspernatur nostrum facilis atque unde
      provident?
      <div
        className='App'
        onClick={() => Message({ title: '年年岁岁花相似，岁岁年年人不同' })}>
        hello
      </div>
      <div
        className='App'
        onClick={() =>
          Message({ title: '年年岁岁花相似，岁岁年年人不同', type: 'danger' })
        }>
        hello
      </div>
    </div>
  )
}

export default App
