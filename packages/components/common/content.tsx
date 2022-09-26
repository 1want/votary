import { ContentProps } from './types'

const Content = (props: ContentProps) => {
  const { children } = props

  return <div className='v-content'>{children}</div>
}

export { Content }
