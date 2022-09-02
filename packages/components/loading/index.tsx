import './index.css'

type Props = {
  show: boolean
  onClose?: () => void
}
const Dialog = (props: Props) => {
  const { show, onClose } = props
  return (
    <>
      {show && (
        <div className='loading-wrapper'>
          <div className='loading'>o</div>
        </div>
      )}
    </>
  )
}

export default Dialog
