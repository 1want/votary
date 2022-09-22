# Message 提示

---

### 提示状态

状态类型 info、success、warning、danger 默认为 info

<code hideActions='["CSB","EXTERNAL"]' src="./type.tsx" />

### 自定义关闭时间

添加 duration 定义关闭时间
<code hideActions='["CSB","EXTERNAL"]' src="./duration.tsx" />

<br/>

### API

#### Props

| 参数     | 说明                                       | 类型   | 默认值 |
| -------- | ------------------------------------------ | ------ | ------ |
| message  | 提示文本                                   | string |        |
| type     | 类型，可选值为 info success warning danger | string | info   |
| duration | 自动关闭时间 ，单位毫秒                    | number | 3000   |
