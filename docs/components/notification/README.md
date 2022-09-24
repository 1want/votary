# Notification 通知

### 基本使用

<code hideActions='["CSB","EXTERNAL"]' src="./basic.tsx" />

### 背景模糊

blur 属性可以让通知信息的背景模糊，默认为 true
<code hideActions='["CSB","EXTERNAL"]' src="./blur.tsx" />

<br />

### API

#### Props

| 参数     | 说明                        | 类型    | 默认值 |
| -------- | --------------------------- | ------- | ------ |
| title    | 标题                        | string  |        |
| blur     | 背景是否模糊                | boolean | true   |
| message  | 通知栏正文内容              | string  |        |
| duration | 显示时间，设置为 0 则不关闭 | number  | 0      |
