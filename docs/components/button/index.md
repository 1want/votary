# Button 按钮

---

### 按钮类型

类型支持 default、primary、danger 三种类型，默认为 default

<code hideActions='["CSB","EXTERNAL"]' src="./type.tsx" />

### 按钮风格

风格支持 plain、hairline、 两种类型，默认为 false

<code hideActions='["CSB","EXTERNAL"]' src="./style.tsx" />

### 按钮尺寸

尺寸支持 mini、normal、large 三种类型，默认为 normal

<code hideActions='["CSB","EXTERNAL"]' src="./size.tsx" />

### 图标按钮

<code hideActions='["CSB","EXTERNAL"]' src="./icon.tsx" />

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
