import vnode from "./vnode";
import createElement from "./createElement";
// patch函数有两个参数，一是旧虚拟DOM，二是新虚拟DOM
export default function (oldVnode, newVnode) {
  //  判断旧节点是否为真实DOM元素
  if(!oldVnode.sel){
    // 如果是DOM元素，则将真实DOM转换为虚拟DOM
    oldVnode = vnode(oldVnode.tagName.toLowerCase(), {}, oldVnode, [], '')
  }
  // 如果是旧的虚拟DOM，并且判断它与新节点的根节点是否相同，如果不同，则直接删除重建
  if(oldVnode.key === newVnode.key && oldVnode.sel === newVnode.sel) {
    // 是同一个根节点，并且key相同，差异化更新
    // 要做的判断，判断新虚拟节点和老虚拟节点是否相等，如果相等则什么都不做
    if (oldVnode === newVnode) return 
    // 判断新虚拟节点是否存在文本节点
    if (newVnode.text) {
      // 判断新虚拟节点的文本节点是否和旧虚拟节点的文本节点是否相同，
      // 如果相同什么都不做，如果不同则更新成新虚拟节点的文本节点
      if (newVnode.text !== oldVnode.text) {
        oldVnode.elm.innerText = newVnode.text
      }
    } else {
      // 这个分支说明oldVnode和newVnode都存在children属性，这是最麻烦的情况
      if (oldVnode.children !== undefined && oldVnode.children.length > 0) { // 判断旧虚拟节点是否存在children属性
        // 
        // 
        // 
        // 
      } else {
        // 能进到这个分支说明，新虚拟节点存在children属性而旧虚拟节点是文本节点
        // 1. 先删除旧虚拟节点
        console.log(oldVnode, '我是oldVnode的elm属性')
        oldVnode.elm.innerHTML = ''
        // 2. 再将新虚拟节点的children替换到旧虚拟节点上
        for(let i = 0; i < newVnode.children.length; i++) {
          let dom = createElement(newVnode.children[i])
          oldVnode.elm.appendChild(dom)
        }
      }
    }
  } else {
    // 不是同一个根节点， 暴力拆除重建
    let vnode = createElement(newVnode)
    if(oldVnode.elm.parentNode && vnode) {
      // 往老节点前面插入新节点
      oldVnode.elm.parentNode.insertBefore(vnode, oldVnode.elm)
    }
    // 拆除老节点, 要让oldVnode的父级节点删除oldVnode
    oldVnode.elm.parentNode.removeChild(oldVnode.elm)
  }
}