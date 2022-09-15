interface ProgressProps {
  percentage?: number
  color?: string
  type?: string
}

const Progress = (props: ProgressProps) => {
  const { percentage, color } = props

  return (
    <div className='wrapper'>
      <div
        className='progress'
        style={{ width: percentage + '%', background: color }}></div>
      <span className='percentage'>{percentage}%</span>
    </div>

    // <div className='c-wrapper'>
    //   <div className='c-progress'>
    //     <div className='c-content'></div>
    //   </div>
    // </div>
  )
}

export default Progress
