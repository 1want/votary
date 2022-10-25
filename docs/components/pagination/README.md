# Pagination 分页

---

### 基础用法

<code hideActions='["CSB","EXTERNAL"]' src="./basic.tsx" />

### 小型分页

添加 small 属性让分页变小
<code hideActions='["CSB","EXTERNAL"]' src="./small.tsx" />

<br/>

### API

#### Props

| 参数    | 说明         | 类型    | 默认值 |
| ------- | ------------ | ------- | ------ |
| current | 当前选中页数 | number  | 1      |
| total   | 总条目数     | number  |        |
| small   | 小型分页     | boolean | false  |

#### Events

| 参数         | 说明           | 类型    | 默认值 |
| ------------ | -------------- | ------- | ------ |
| onPageChange | 页码改变的回调 | (e)=>{} |        |
