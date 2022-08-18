// 引入文件
import { type } from './function/type.js'
// 向外暴露文件
export {
  type
}

export const test = () => {
  document.write('测试自定义包')
  console.log('test()')
}
