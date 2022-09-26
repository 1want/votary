# Dialog 对话框

---

### 基础用法

<code hideActions='["CSB","EXTERNAL"]' src="./basic.tsx" />

### 背景模糊

添加 blur 属性让背景模糊
<code hideActions='["CSB","EXTERNAL"]' src="./blur.tsx" />

### 按钮监听

<code hideActions='["CSB","EXTERNAL"]' src="./listener.tsx" />

<br />

### API

#### Props

| 参数       | 说明             | 类型    | 默认值  |
| ---------- | ---------------- | ------- | ------- |
| title      | 标题             | string  | default |
| width      | 设置 Dialog 宽度 | string  | 30      |
| blur       | 背景是否模糊     | boolean | false   |
| showButton | 是否显示底部按钮 | boolean | true    |

#### Events

| 参数      | 说明             | 类型     | 默认值 |
| --------- | ---------------- | -------- | ------ |
| onClose   | 关闭 Dialog 回调 | function |        |
| onConfirm | 确认按钮 回调    | function |        |
| onCancel  | 取消按钮 回调    | function |        |
