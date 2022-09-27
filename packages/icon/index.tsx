import classNames from 'classnames'
import './assets/iconfont.css'

interface IconProps {
  name: string
  onClick?: () => void
  className?: string
}

const Icon = (props: IconProps) => {
  const { name, onClick, className } = props

  const classes = classNames(['iconfont icon-' + name, className])

  return <span className={classes} onClick={onClick}></span>
}

export { Icon }
