import h from "./mySnabbdom/h"
import patch from "./mySnabbdom/patch"
const vnode1 = h('h1', {}, '你好')

const vnode2 = h('ul', {}, [
  h('li', {}, 'aa'),
  h('li', {}, 'bb'),
  h('li', {}, [
    h('div', {}, [
      h('p', {}, 'aa')
    ])
  ]),
])

const container = document.getElementById('container')
patch(container, vnode2)