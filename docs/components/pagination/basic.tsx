import { Pagination } from '../../../packages/components/pagination'

export default () => (
  <Pagination
    pageChange={e => {
      console.log(e)
    }}
    total={120}></Pagination>
)
