import { Table } from 'votary'

const { Column } = Table
const tableData = [
  {
    name: 'zhangsan',
    age: '20',
    hobby: 'eat'
  },
  {
    name: 'lisi',
    age: '22',
    hobby: 'sleep'
  },
  {
    name: 'tony',
    age: '27',
    hobby: 'cos'
  }
]

export default () => (
  <Table data={tableData}>
    <Column prop='name' label='name' />
    <Column prop='age' label='age' />
    <Column prop='hobby' label='hobby' />
  </Table>
)
