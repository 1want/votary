import ReactDOM from 'react-dom'
import { Mask } from '../mask'
import { Header, Content, Footer } from '../common'
import { DialogProps } from './types'

const body = document.getElementsByTagName('body')[0]

const Dialog = (props: DialogProps) => {
  const {
    visible,
    onClose,
    blur = false,
    title,
    width = '30',
    showButton,
    onConfirm,
    onCancel,
    children
  } = props

  const dialogDom = (
    <Mask onClick={onClose} visible={visible} blur={blur}>
      <div
        className='v-dialog'
        style={{ width: width + '%' }}
        onClick={e => {
          e.stopPropagation()
        }}>
        <Header title={title} onClose={onClose} />
        <Content children={children} />
        <Footer
          showButton={showButton}
          onConfirm={onConfirm}
          onCancel={onCancel}
        />
      </div>
    </Mask>
  )

  return ReactDOM.createPortal(dialogDom, body)
}

export default Dialog
