import { Pagination } from 'votary'

export default () => (
  <Pagination
    pageChange={e => {
      console.log(e)
    }}
    total={300}></Pagination>
)
