import { Pagination } from 'votary'

const pageSize = [10, 20, 30, 40, 50]

export default () => (
  <Pagination
    onPageChange={e => {
      console.log(e)
    }}
    pageSize={pageSize}
    total={300}></Pagination>
)
