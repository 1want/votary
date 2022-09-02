import Button from '../../../packages/components/button'
import '../../../packages/components/button/index.css'
import './index.css'

export default () => (
  <div className='button-demo'>
    <Button size='mini' type='default'>
      中杯
    </Button>
    <Button type='default'>大杯</Button>
    <Button size='large' type='default'>
      超大杯
    </Button>
  </div>
)
