import { Button } from '../../../packages/components/button'
import './index.css'

export default () => (
  <div className='button-demo'>
    <Button plain type='primary'>
      镂空
    </Button>
    <Button hairline plain type='primary'>
      细边框
    </Button>
    <Button plain type='danger'>
      镂空
    </Button>
    <Button hairline plain type='danger'>
      细边框
    </Button>
  </div>
)
