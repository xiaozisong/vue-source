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
  } else {
    // 不是同一个根节点， 暴力拆除重建
    let vnode = createElement(newVnode)
    if(oldVnode.elm.parentNode && vnode) {
      // 往老节点前面插入新节点
      oldVnode.elm.parentNode.insertBefore(vnode, oldVnode.elm)
    }
    console.log(oldVnode.elm.parentNode, 'oldVnode.elm.parentNode')
    // 拆除老节点, 要让oldVnode的父级节点删除oldVnode
    oldVnode.elm.parentNode.removeChild(oldVnode.elm)
  }
}