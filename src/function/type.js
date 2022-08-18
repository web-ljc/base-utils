/*
* @name   检验数据类型
* @params {any} 数据
*
*/
// 定义对象
const obj = {}
// 获取toString方法
const _toString = obj.toString
// 数据类型
const _typeArr = ['String', 'Number', 'Boolean', 'Object', 'Function', 'Array', 'RegExp', 'Date', 'Error', 'Symbol']
// 对象添加数据类型属性
_typeArr.forEach(item => {
  obj[`[object ${item}]`] = item.toLowerCase()
})

export function type(val) {
  // 传递null和undefined，返回对应字符串
  if(val == null) {
    return val + ''
  }
  // 判断其他数据类型
  return typeof val === 'object' || typeof val === 'function' ?
    obj[_toString.call(val)] || 'object' : typeof val
}
