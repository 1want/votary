import _Table from './table'
import TableColumn from './table-column'
import './style/index.less'

const Table = Object.assign(_Table, { Column: TableColumn })

export { Table }
