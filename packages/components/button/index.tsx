import './index.css'

type Props = {
  type?: string
  size?: string
  hairline?: boolean
  plain?: boolean
  children?: any
  onClick?: () => any
}

const btnClass = (arr: Array<string | undefined>) =>
  arr.filter(item => item).join(' ')

const Button = (props: Props) => {
  const { onClick, type, size, hairline, plain, children } = props
  const className = btnClass([
    type,
    size,
    hairline ? 'hairline' : '',
    plain ? `plain ${type}-plain` : ''
  ])
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  )
}

export default Button
