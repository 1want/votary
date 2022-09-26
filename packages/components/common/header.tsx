import { HeaderProps } from './types'

const Header = (props: HeaderProps) => {
  const { title, onClose } = props

  return (
    <>
      {title && (
        <div className='v-header'>
          <div className='title'>{title}</div>
          <span className='iconfont icon-close' onClick={onClose}></span>
        </div>
      )}
    </>
  )
}

export { Header }
