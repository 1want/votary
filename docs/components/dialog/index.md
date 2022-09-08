# Dialog 对话框

---

### 基础用法

<code hideActions='["CSB","EXTERNAL"]' src="./basic.tsx" />

### 监听按钮

<code hideActions='["CSB","EXTERNAL"]' src="./listener.tsx" />

### API

| 参数       | 说明             | 类型     | 默认值  |
| ---------- | ---------------- | -------- | ------- |
| title      | 标题             | string   | default |
| width      | 设置 Dialog 宽度 | string   | 30%     |
| center     | 内容居中显示     | string   | false   |
| showButton | 是否显示底部按钮 | boolean  | true    |
| onClose    | 关闭 Dialog 回调 | function |         |
| onConfirm  | 确认按钮 回调    | function |         |
| onCancel   | 取消按钮 回调    | function |         |
