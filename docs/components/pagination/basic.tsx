import { Pagination } from '../../../packages/components/pagination'

export default () => (
  <Pagination
    total={52}
    current={2}
    pageChange={page => {
      console.log(page, 'page')
    }}
    sizeChange={size => {
      console.log(size, 'size')
    }}></Pagination>
)
