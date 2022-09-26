import { Header, Content, Footer } from '../common'

import { DialogProps } from './types'

const DialogContent = (props: DialogProps) => {
  const {
    title,
    width = '30',
    showButton,
    onClose,
    onConfirm,
    onCancel,
    children
  } = props

  return (
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
  )
}

export default DialogContent
