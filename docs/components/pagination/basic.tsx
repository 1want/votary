import { Pagination } from 'votary'

export default () => (
  <Pagination
    onPageChange={e => {
      console.log(e)
    }}
    total={300}></Pagination>
)
