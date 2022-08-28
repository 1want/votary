import './index.css'

type Props = {
  type?: string
  size?: string
  hairline?: boolean
  plain?: boolean
  children?: any
  onClick?: () => {}
}

const btnClass = (arr: Array<string | undefined>) =>
  arr.filter(item => item).join(' ')

const Button = (props: Props) => {
  console.log(props)
  const { type, size, hairline, plain, children } = props
  return (
    <button onClick={props.onClick} className={btnClass([type, size])}>
      {children}
    </button>
  )
}

export default Button
