![blockchain](http://m.jieshui8.net/images/qrinfo_logo.png)

# PAAT Components PaatSearchPage.vue

## PaatSearchPage 引用方法

``` vue
<PaatSearchPage
  :searchFormOptions="searchFormOptions"
  :tableDataOptions="tableDataOptions"
  :tableData="tableData"
  :tableTotal="tableTotal"
  :tableCurrentPage="1"
  :tablePageSize="10"
  @getParams="getParams" />
```

## 字段说明

属性|描述|类型|是否必填|其他
--|:--:|:--:|:--:|:--
searchFormOptions|筛选遍历条件|Array|will|空数组时筛选条件会隐藏, 自动搜索
tableDataOptions|表格遍历条件|Array|will|空数组时表格会隐藏,不建议这样使用会失去当前页码的意义
tableData|表格遍历数据|Array|will| 默认值 []
tableTotal|数据总数|Number|will| tableTotal > tablePageSize 显示分页, 因业务是外部组件执行的需要传入最新总数才会更新 默认值 0
tableCurrentPage|当前页码|Number|will| 默认值 1
tablePageSize|当前页数|Number|will| 默认值 10
@getParams|计算结果|Function|will| 原则上必填, 需要处理业务逻辑

## 字段说明 - searchFormOptions 

属性|描述|类型|是否必填|其他
--|:--:|:--:|:--:|:--
type|表单类型|String|required|input=输入框, select=下来框, date-picker=日期控件
label|名称名称|String|required|咱不支持隐藏表单名称功能
dataProp|表单查询字段|String/Array|required|type=input时设置Array类型最多支持2个输入框,type=date-picker时设置Array类型最多支持2个日期控件
defaultValue|表单默认值|String/Number/Boolean|will|
multiple|是否多选|Boolean|select is required|type=select时使用, 默认值false
originData|下拉框数据|Array|select is required|type=select时使用, 默认值[]
originDataProp|下拉框数据索引|Object|select is at will but has default|type=select时使用, 默认值{value:'value', label: 'label'}
valuePrefix|下拉框列表名称前缀|String|will|
valueSuffix|下拉框列表名称后缀|String|will|
## 字段说明 - searchFormOptions 例子

``` js
[
  {
      type: 'input',
      label: 'label 1',
      dataProp: 'companyId',
  },
  {
      type: 'input',
      label: 'label 2',
      dataProp: ['input1', 'input2'],
  },
  {
      type: 'select',
      label: 'label 3',
      dataProp: 'select',
      multiple: true,
      originData: [],
      valueSuffix: '%',
      originDataProp: {
          value: 'codeKey', label: 'codeValue'
      }
  },
  {
      type: 'date-picker',
      label: 'label 4',
      dataProp: ['start','end'],
      dateType: 'date'
  },
  {
      type: 'select',
      label: 'label 5',
      dataProp: 'select1',
      originData: [],
      originDataProp: {
          value: 'codeKey', label: 'codeValue'
      }
  }
]
```

## 字段说明 - tableDataOptions 
属性|描述|类型|是否必填|其他
--|:--:|:--:|:--:|:--
prop|数据数据索引|String|required|
label|表头内容|String|required|

## 字段说明 - searchFormOptions 例子

``` js
[
 { prop: 'companyId', label: 'label 1' },
 { prop: 'companyId', label: 'label 2' },
]
```
