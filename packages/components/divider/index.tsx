import './index.css'

type Props = {
  children?: any
  dashed?: boolean
}

const divider = (props: Props) => {
  const { children, dashed } = props
  const className = `${children ? 'line-content ' : ''}${
    dashed ? 'dashed' : 'line'
  }`
  return <div className={className}>{children}</div>
}

export default divider
