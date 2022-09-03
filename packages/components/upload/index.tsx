import { useState } from 'react'
import './index.css'

const Upload = () => {
  const [url, setUrl] = useState('')

  const upload = file => {
    var imgFile = file.target.files[0]
    var fr = new FileReader()
    fr.onload = function () {
      setUrl(fr.result)
    }
    fr.readAsDataURL(imgFile)
  }

  return (
    <>
      <div className='upload-box'>+</div>
      <input className='upload' type='file' onChange={upload} />
      <img className='img' src={url} alt='' />
    </>
  )
}

export default Upload
