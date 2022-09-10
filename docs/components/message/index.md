# Message 提示

---

### 提示状态

类型支持 info、success、warning、danger 四种类型，默认为 info

<code hideActions='["CSB","EXTERNAL"]' src="./type.tsx" />

<br/>

### API

#### Props

| 参数     | 说明                                       | 类型   | 默认值 |
| -------- | ------------------------------------------ | ------ | ------ |
| title    | 提示语                                     | string |        |
| type     | 类型，可选值为 info success warning danger | string | info   |
| duration | 自动关闭时间 ，单位毫秒                    | number | 3000   |
