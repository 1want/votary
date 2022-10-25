import { Pagination } from '../../../packages/components/pagination'

export default () => (
  <Pagination
    onPageChange={e => {
      console.log(e)
    }}
    total={300}></Pagination>
)
