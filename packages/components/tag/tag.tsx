import { createNamespace } from '../../utils/createNamespace'
import classNames from 'classnames'
import { TagProps } from './types'

const bem = createNamespace('tag')

const Tag = (props: TagProps) => {
  const { children, color } = props

  const classes = bem(classNames(['']))

  return (
    <div className={classes} style={{ background: color }}>
      {children}
    </div>
  )
}

export default Tag
