import { TableColumnProps } from './types'

const TableColumn = (props: TableColumnProps) => {
  const { label } = props

  return <td className='column-item'>{label}</td>
}

export default TableColumn
