import ReactDOM from 'react-dom'
import classNames from 'classnames'
import { createNamespace } from '../../utils/createNamespace'
import { DrawerContent } from './drawer-content'
import { Mask } from '../mask'

import { DrawerProps } from './types'

const bem = createNamespace('drawer')

const body = document.getElementsByTagName('body')[0]

const Drawer = (props: DrawerProps) => {
  const { direction = 'right', blur, visible, onClose } = props
  const classes = bem(classNames([direction]))

  const DrawerDom = (
    <Mask onClick={onClose} visible={visible} blur={blur} className={classes}>
      <DrawerContent {...props} />
    </Mask>
  )

  return ReactDOM.createPortal(DrawerDom, body)
}

export default Drawer
