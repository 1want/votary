interface ImageProps {
  src: string
}
const Image = (props: ImageProps) => {
  const { src } = props

  return (
    <div className='v-image'>
      <img src={src} alt='' />
      <div className='cover'></div>
    </div>
  )
}

export default Image
