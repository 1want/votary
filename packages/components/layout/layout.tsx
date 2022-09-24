import { LayoutProps } from './types'

const Header = (props: LayoutProps) => {
  const { children } = props
  return <div className='header'>{children}</div>
}

const Aside = (props: LayoutProps) => {
  const { children } = props
  return <div className='aside'>{children}</div>
}

const Main = (props: LayoutProps) => {
  const { children } = props
  return <div className='main'>{children}</div>
}

const Layout = (props: LayoutProps) => {
  const { children } = props
  return <div className='layout'>{children}</div>
}

export default Layout

export { Header, Aside, Main }
