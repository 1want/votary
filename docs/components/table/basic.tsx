import { Table } from 'votary'

const { Column } = Table
const tableData = [
  {
    fruits: '苹果',
    greens: '白菜',
    tea: '细粉'
  },
  {
    fruits: '橘子',
    greens: '番茄',
    tea: '珍珠粉'
  },
  {
    fruits: '香蕉',
    greens: '辣椒',
    tea: '小面'
  }
]

export default () => (
  <Table data={tableData}>
    <Column prop='fruits' label='水果' />
    <Column prop='greens' label='蔬菜' />
    <Column prop='tea' label='面条' />
  </Table>
)
