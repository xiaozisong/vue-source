import h from "./mySnabbdom/h"
import patch from "./mySnabbdom/patch"
const vnode1 = h('div', {}, [
  h('h1', {}, '你好啊'),
  h('h1', {}, '我不好啊')
])

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

const btn = document.querySelector('button')
btn.addEventListener('click', function () {
  patch(vnode2, vnode1)
})