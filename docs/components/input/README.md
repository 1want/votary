# Input 输入框

---

### 基础用法

<code hideActions='["CSB","EXTERNAL"]' src="./basic.tsx" />

### 带 icon 的输入框

<code hideActions='["CSB","EXTERNAL"]' src="./icon.tsx" />

### 密码框

<code hideActions='["CSB","EXTERNAL"]' src="./pwd.tsx" />

### API

#### Props

| 参数      | 说明         | 类型    | 默认值 |
| --------- | ------------ | ------- | ------ |
| type      | 类型         | string  | text   |
| value     | 默认值       | string  |        |
| leftIcon  | 左侧图标     | string  |        |
| rightIcon | 右侧图标     | string  |        |
| maxlength | 最大输入长度 | number  |        |
| minlength | 最小输入长度 | number  |        |
| readOnly  | 是否只读     | boolean | false  |

#### Events

| 参数     | 说明                    | 类型    | 默认值 |
| -------- | ----------------------- | ------- | ------ |
| onChange | 输入内容改变的回调      | e => {} |        |
| onFocus  | 在 Input 获得焦点时触发 | e =>{}  |        |
| onBlur   | 在 Input 失去焦点时触发 | e =>{}  |        |
