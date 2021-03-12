---
title: API
---

### Select

| 参数                      | 说明                                                                                                                                                                        | 类型                                                           | 默认值                                                                      |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------- | --------------------------------------------------------------------------- |
| combo                     | 复合输入值                                                                                                                                                                  | boolean                                                        | false                                                                       |
| searchable                | 是否可搜索                                                                                                                                                                  | boolean                                                        | false                                                                       |
| reverse                | 是否显示多选反向                                                                                                                                                                  | boolean                                                        | true                                                                       |
| searchMatcher             | 搜索器。当为字符串时，作为 lookup 的参数名来重新请求值列表。                                                                                                                | string \| ({ record, text, textField, valueField }) => boolean | ({ record, text, textField }) => record.get(textField).indexOf(text) !== -1 |
| optionsFilter             | 选项过滤                                                                                                                                                                    | (record) => boolean                                            |                                                                             |
| checkValueOnOptionsChange | 当选项改变时，检查并清除不在选项中的值                                                                                                                                      | boolean                                                        | true                                                                        |
| dropdownMatchSelectWidth  | 下拉框匹配输入框宽度                                                                                                                                                        | boolean                                                        | true                                                                        |
| dropdownMenuStyle         | 下拉框菜单样式名                                                                                                                                                            | object                                                         |                                                                             |
| options                   | 下拉框选项数据源（使用后需要自行处理参数等）                                                                                                                                | DataSet                                                        |                                                                             |
| primitiveValue            | 是否为原始值（建议以绑定的数据源 Field 的 type 来决定值类型，如 type 设为 object 相当于 primitiveValue 设为 false）`true` - 选项中 valueField 对应的值 `false` - 选项值对象 | boolean                                                        |                                                                             |
| optionRenderer            | 渲染 Option 文本的钩子                                                                                                                                                      | ({ record, text, value }) => ReactNode                         |                                                                             |
| notFoundContent           | 当下拉列表为空时显示的内容                                                                                                                                                  | ReactNode                                                      |                                                                             |
| onOption                  | 设置选项属性，如 disabled                                                                                                                                                   | ({ dataSet, record })) => object                               |                                                                             |
| commonItem | 设置常用项 | Array&lt;string&gt; | undefined |
| maxCommonTagPlaceholder | 设置常用项标签超出最大数量时的占位描述 | ReactNode \| (restValues) => ReactNode |  |
| maxCommonTagCount | 设置常用项标签最大数量 | number |  |
| maxCommonTagTextLength | 设置常用项标签文案最大长度 | number |  |         
| noCache    | 下拉时自动重新查询，不缓存下拉数据源                                   | boolean |   |
| selectAllButton | 多选模式下，是否显示全选按钮 | boolean | true  |


更多属性请参考 [TriggerField](/zh/procmp/abstract/trigger-field/#TriggerField)。

### Select.OptGroup

| 参数  | 说明       | 类型   | 默认值 |
| ----- | ---------- | ------ | ------ |
| label | 选项组标题 | string |        |

### Select.Option

| 参数     | 说明   | 类型    | 默认值 |
| -------- | ------ | ------- | ------ |
| value    | 选项值 | any     |
| disabled | 禁用   | boolean |        |  |

<style>
.code-box-demo .c7n-pro-select-wrapper {
  margin-bottom: .1rem;
}
</style>