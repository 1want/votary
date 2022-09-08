import Button from '../button'

interface Props {
  title?: string
  center?: boolean
  width?: string
  visible: boolean
  showButton?: boolean
  children?: any
  onClose?: () => void
  onConfirm?: () => void
  onCancel?: () => void
}

const body = document.getElementsByTagName('body')[0]

const Dialog = (props: Props) => {
  const {
    title,
    center,
    width = '30%',
    visible,
    showButton,
    children,
    onClose,
    onConfirm,
    onCancel
  } = props

  if (visible) {
    body.style.overflow = 'hidden'
  } else {
    body.style.overflow = 'visible'
  }

  return (
    <>
      {visible && (
        <div className='v-dialog-wrapper' onClick={onClose}>
          <div
            className='dialog'
            style={{ width: `${width}` }}
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
                <Button type='primary' onClick={onConfirm}>
                  确认
                </Button>
                <Button type='default' onClick={onCancel}>
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
