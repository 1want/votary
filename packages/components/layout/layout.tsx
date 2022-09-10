interface LayoutProps {
  children?: any
}
const Layout = (props: LayoutProps) => {
  const { children } = props
  return <div className='layout'>{children}</div>
}

export default Layout
