# Popconfirm 气泡确认框

---

### 基础用法

<code hideActions='["CSB","EXTERNAL"]' src="./basic.tsx" />

<br/>

### API

#### Props

| 参数     | 说明                                  | 类型    | 默认值  |
| -------- | ------------------------------------- | ------- | ------- |
| type     | 类型，可选值为 default primary danger | string  | default |
| size     | 尺寸，可选值为 large small mini       | string  | normal  |
| icon     | 添加按钮图标                          | string  |         |
| plain    | 是否为朴素按钮                        | boolean | false   |
| hairline | 是否使用细边框                        | boolean | false   |
| disabled | 是否禁用按钮                          | boolean | false   |

#### Events

| 参数    | 说明         | 类型     | 默认值 |
| ------- | ------------ | -------- | ------ |
| onClick | 点击事件回调 | function |        |
