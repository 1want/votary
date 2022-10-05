import { CollapseProps } from './types'

const Collapse = (props: CollapseProps) => {
  const { children } = props
  return <ul>{children}</ul>
}

export default Collapse
