import ReactDOM from 'react-dom'
import classNames from 'classnames'
import DrawerContent from './drawer-content'
import { Mask } from '../mask'

import { DrawerProps } from './types'

const body = document.getElementsByTagName('body')[0]

const Drawer = (props: DrawerProps) => {
  const { direction = 'right', blur, visible, onClose } = props
  const classes = classNames(['v-drawer-' + direction])

  const DialogDom = (
    <Mask onClick={onClose} visible={visible} blur={blur} className={classes}>
      <DrawerContent {...props} />
    </Mask>
  )

  return ReactDOM.createPortal(DialogDom, body)
}

export default Drawer
