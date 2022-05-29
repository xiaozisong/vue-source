import h from "./mySnabbdom/h"

const vnode1 = h('div', {}, [
  h('div', {}, 'aa'),
  h('div', {}, 'bb'),
  h('div', {}, 'cc')
])
console.log(vnode1)

const vnode2 = h('div', {}, h('span', {}, 'heihei'))
console.log(vnode2)