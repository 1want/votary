import './index.css'

type Props = {
  show: boolean
}
const Dialog = (props: Props) => {
  const { show } = props
  return (
    <>
      {show && (
        <div
          className='loading-wrapper'
          onClick={e => {
            e.stopPropagation()
          }}>
          <div className='loading'>Loading...</div>
        </div>
      )}
    </>
  )
}

export default Dialog
