import React from 'react'
import Button from '../../../packages/components/button'
import '../../../packages/components/button/index.css'
import './index.css'

export default () => (
  <div className='button-demo'>
    <Button plain type='default'>
      镂空
    </Button>
    <Button hairline plain type='primary'>
      细边框
    </Button>
  </div>
)
