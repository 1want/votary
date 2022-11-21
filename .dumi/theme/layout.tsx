import React from 'react'
import Layout from 'dumi-theme-default/es/layout'
import './layout.css'

export default ({ children, ...props }) => (
  <Layout {...props}>{children}</Layout>
)
