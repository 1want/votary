const Menu = props => {
  const { children } = props
  return <div className=''>{children}</div>
}
const MenuItem = props => {
  const { children } = props
  return <div>{children}</div>
}
const SubMenu = props => {
  const { children } = props
  return <div>{children}</div>
}

export { MenuItem, SubMenu }
export default Menu
