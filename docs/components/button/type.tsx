import React from 'react'
import Button from '../../../packages/components/button'
import '../../../packages/components/button/index.css'
import './index.css'

export default () => (
  <div className='button-demo'>
    <Button type='default'>默认</Button>
    <Button type='primary'>花</Button>
    <Button type='success'>里</Button>
    <Button type='warning'>胡</Button>
    <Button type='danger'>哨</Button>
    <Button type='colorful'>色彩斑斓白</Button>
  </div>
)
