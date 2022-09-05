import { useState } from 'react'
import './index.css'

const Upload = () => {
  const [url, setUrl] = useState('')

  const upload = () => {}

  return (
    <>
      <div className='upload-box'>+</div>
      <input className='upload' type='file' onChange={upload} />
      <img className='img' src={url} alt='' />
    </>
  )
}

export default Upload
