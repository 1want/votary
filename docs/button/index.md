---
order: 2
group:
  path: /
  title: 组件
  order: 2
---

# Button 按钮

---

### 按钮类型

按钮支持 default、primary、success、warning、danger 五种类型，默认为 default

<code hideActions='["CSB","EXTERNAL"]' src="./type.tsx" />

### 按钮风格

按钮支持 default、primary、success、warning、danger 五种类型，默认为 default

<code hideActions='["CSB","EXTERNAL"]' src="./type.tsx" />

### 按钮尺寸

按钮支持 default、primary、success、warning、danger 五种类型，默认为 default

<code hideActions='["CSB","EXTERNAL"]' src="./type.tsx" />

### Api

| 属性     | 说明                                                  | 类型                                                                                      | 默认值    |
| -------- | ----------------------------------------------------- | ----------------------------------------------------------------------------------------- | --------- |
| block    | 将按钮宽度调整为其父宽度的选项                        | boolean                                                                                   | false     |
| disabled | 按钮失效状态                                          | boolean                                                                                   | false     |
| href     | 点击跳转的地址，指定此属性 button 的行为和 a 链接一致 | string                                                                                    | -         |
| htmlType | 设置 `button` 原生的 `type` 值                        | string                                                                                    | `button`  |
| size     | 设置按钮大小                                          | `lg` \| `md` \| `sm`                                                                      | `md`      |
| type     | 设置按钮类型                                          | `primary` \| `info` \| `warning` \| `danger` \| `dashed` \| `link` \| `text` \| `default` | `default` |
| onClick  | 点击按钮时的回调                                      | (event) => void                                                                           | -         |
