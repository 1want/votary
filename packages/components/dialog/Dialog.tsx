import ReactDOM from 'react-dom'
import DialogContent from './dialog-content'
import { Mask } from '../mask'

import { DialogProps } from './types'

const body = document.getElementsByTagName('body')[0]

const Dialog = (props: DialogProps) => {
  const { visible, onClose, blur = false } = props

  const dialogDom = (
    <Mask onClick={onClose} visible={visible} blur={blur}>
      <DialogContent {...props} />
    </Mask>
  )

  return ReactDOM.createPortal(dialogDom, body)
}

export default Dialog
