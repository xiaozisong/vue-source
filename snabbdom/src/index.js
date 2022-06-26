import h from "./mySnabbdom/h"
import patch from "./mySnabbdom/patch"
const vnode1 = h('ul', {}, '213')

const vnode2 = h('ul', {}, [
  h('li', {}, 'a'),
  h('li', {}, 'b'),
  h('li', {}, [
    h('div', {}, [
      h('p', {}, 'aa')
    ])
  ]),
])

const container = document.getElementById('container')
patch(container, vnode1)

const btn = document.querySelector('button')
btn.addEventListener('click', function () {
  patch(vnode1, vnode2)
})