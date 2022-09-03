import Button from '../button'
import './index.css'

type Props = {
  title?: string
  visible: boolean
  children?: any
  onClose?: () => void
}
const Dialog = (props: Props) => {
  const { title, children, visible, onClose } = props
  return (
    <>
      {visible && (
        <div className='dialog-wrapper' onClick={onClose}>
          <div
            className='dialog'
            onClick={e => {
              e.stopPropagation()
            }}>
            <div className='header'>
              <div className='title'>{title}</div>
              <div className='close' onClick={onClose}>
                x
              </div>
            </div>
            <div className='content'>{children}</div>
            <div className='footer'>
              <Button type='primary' onClick={onClose}>
                确认
              </Button>
              <Button type='default' onClick={onClose}>
                取消
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Dialog
