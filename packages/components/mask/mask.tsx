import { CSSTransition } from 'react-transition-group'
import classNames from 'classnames'

interface MaskProps {
  visible: boolean
  blur?: boolean
  onClick?: () => void
}

const body = document.getElementsByTagName('body')[0]

const Mask = (props: MaskProps) => {
  const { visible, blur, onClick } = props

  const classes = classNames(['v-mask', blur && 'v-blur'])

  if (visible) {
    body.style.overflow = 'hidden'
  } else {
    body.style.overflow = 'visible'
  }

  return (
    <CSSTransition classNames='v-mask' unmountOnExit timeout={400} in={visible}>
      <div className={classes} onClick={onClick}></div>
    </CSSTransition>
  )
}

export default Mask
