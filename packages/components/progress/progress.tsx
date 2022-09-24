import { ProgressProps } from './types'

const Progress = (props: ProgressProps) => {
  const { percentage, color } = props

  return (
    <div className='progress-wrapper'>
      <div className='progress-line'>
        <div
          className='progress-bar'
          style={{ width: percentage + '%', background: color }}></div>
        <span className='percentage'>{percentage}%</span>
      </div>
    </div>
  )
}

export default Progress
