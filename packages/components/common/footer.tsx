import { Button } from '../button'
import { FooterProps } from './types'

const Footer = (props: FooterProps) => {
  const { showButton = true, onConfirm, onCancel } = props

  return (
    <>
      {showButton && (
        <div className='v-footer'>
          <Button plain onClick={onConfirm}>
            确认
          </Button>
          <Button plain onClick={onCancel}>
            取消
          </Button>
        </div>
      )}
    </>
  )
}

export { Footer }
