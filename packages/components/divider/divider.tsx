import classnames from 'classnames'
import { createNamespace } from '../../utils/createNamespace'

import { DividerProps } from './types'

const bem = createNamespace('divider')

const divider = (props: DividerProps) => {
  const { children, dashed } = props
  const classes = bem(
    classnames([children && 'content', dashed ? 'dashed' : 'line'])
  )

  return <div className={classes}>{children}</div>
}

export default divider
