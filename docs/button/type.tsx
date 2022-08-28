import React from 'react'
import Button from '../../packages/components/button'
import '../../packages/components/button/index.css'
import './index.css'

export default () => (
  <div className='button-demo'>
    <Button type='default'></Button>
    <Button type='primary'></Button>
    <Button type='success'></Button>
    <Button type='warning'></Button>
    <Button type='danger'></Button>
  </div>
)
