import { BreadcrumbItemProps } from './types'

const BreadcrumbItem = (props: BreadcrumbItemProps) => {
  const { children, to, separator = '/', separatorIcon } = props

  return (
    <div className='item'>
      <span className='name'>{children}</span>
      {separatorIcon ? (
        <span className={`separator iconfont icon-${separatorIcon}`}></span>
      ) : (
        <span className='separator'>{separator}</span>
      )}
    </div>
  )
}

export default BreadcrumbItem
