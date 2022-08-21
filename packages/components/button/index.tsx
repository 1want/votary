import './index.css'

type Props = {
  type?: string
  size?: string
  thin?: string
  plain?: boolean
  onClick?: () => {}
}

const btnClass = (arr: Array<string | undefined>) =>
  arr.filter(item => item).join(' ')

const Button = (props: Props) => {
  return (
    <button
      onClick={props.onClick}
      className={btnClass([props.type, props.size, props.thin])}>
      按钮
    </button>
  )
}

export default Button
