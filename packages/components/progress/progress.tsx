interface ProgressProps {
  percentage?: number
}

const Progress = (props: ProgressProps) => {
  const { percentage } = props

  return (
    <div className='wrapper'>
      <div className='progress' style={{ width: percentage + '%' }}></div>
    </div>
  )
}

export default Progress
