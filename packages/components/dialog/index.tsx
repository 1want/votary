import Button from '../button'
import './index.css'

interface Props {
  title?: string
  visible: boolean
  showButton?: boolean
  children?: any
  onClose?: () => void
}
const Dialog = (props: Props) => {
  const { title, visible, showButton, children, onClose } = props
  return (
    <>
      {visible && (
        <div className='v-dialog-wrapper' onClick={onClose}>
          <div
            className='dialog'
            onClick={e => {
              e.stopPropagation()
            }}>
            <div className='header'>
              <div className='title'>{title}</div>
              <span className='iconfont icon-cross' onClick={onClose}></span>
            </div>
            <div className='content'>{children}</div>
            {showButton && (
              <div className='footer'>
                <Button type='primary' onClick={onClose}>
                  确认
                </Button>
                <Button type='default' onClick={onClose}>
                  取消
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}

export default Dialog
