import _Layout, { Header, Main, Aside } from './layout'

import './style/index.css'

const Layout = Object.assign(_Layout, { Header, Main, Aside, Footer: Header })

export { Layout }
