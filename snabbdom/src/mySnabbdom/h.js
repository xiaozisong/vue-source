import vnode from './vnode'

// 判断，c参数的类型
/* 
  这里只判断三种h函数的使用方式
  1. h('div', {}, 'str')
  2. h('div', {}, [
    h('div', {}, 'str'),
    h('div', {}, 'str')
  ])
  3. h('div', {}, h('', {}, ''))

*/

export default function h(sel, data, c) {
  if(arguments.length < 3) throw new Error('对不起,我是低配h函数,请输入三个参数')

  if(typeof c === 'string' || typeof c === 'number') {
    return vnode(sel, undefined, undefined, undefined, c)
  } else if(Array.isArray(c)) {
    if(!c.length) {
      throw new Error('对不起，您输入的第三个参数的值为空')
    } else { // 说明c是一个数组，并且是有长度的
      let children = []
      // 遍历c参数
      for(let i = 0; i < c.length; i++) {
        // 判断c参数每一项的类型的返回值是否为object
        if(typeof c[i] === 'object' && c[i].hasOwnProperty(sel)) {
          children.push(c[i])
        } else {
          throw new Error('对不起,您输入的参数有误')
        }
      }
      return vnode(sel, undefined, undefined, children, undefined)
    }
  } else if (typeof c === 'object' && c[i].hasOwnProperty(sel)) {
    return vnode(sel, undefined, undefined, c, undefined)
  }
}