import { CSSTransition } from 'react-transition-group'
import classNames from 'classnames'

interface MaskProps {
  visible: boolean
  blur?: boolean
  onClick?: () => void
  className?: string
  children?: any
}

const body = document.getElementsByTagName('body')[0]

const Mask = (props: MaskProps) => {
  const { visible, blur, onClick, className = 'v-fade', children } = props

  const classes = classNames(['v-mask', blur && 'v-blur'])

  if (visible) {
    body.style.overflow = 'hidden'
  } else {
    body.style.overflow = 'visible'
  }

  return (
    <>
      <CSSTransition
        classNames='v-mask'
        unmountOnExit
        timeout={400}
        in={visible}>
        <div className={classes} onClick={onClick}></div>
      </CSSTransition>
      <CSSTransition
        classNames={className}
        unmountOnExit
        timeout={400}
        in={visible}>
        {children}
      </CSSTransition>
    </>
  )
}

export default Mask
