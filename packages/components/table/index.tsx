import _Table from './table'
import TableColumn from './table-column'
import './style/index.css'

const Table = Object.assign(_Table, { Column: TableColumn })

export { Table }
