import './assets/iconfont.css'
// import './index.css'

interface IconProps {
  name: string
}

const Icon = (props: IconProps) => {
  const { name } = props

  return <span className={`iconfont icon-${name}`}></span>
}

export { Icon }
