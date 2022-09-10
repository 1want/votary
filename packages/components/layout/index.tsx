import _Layout from './layout'
import Header from './header'
import Main from './main'
import Aside from './aside'

import './index.css'

const Layout = Object.assign(_Layout, { Header, Main, Aside, Footer: Header })

export { Layout }
