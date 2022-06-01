export default function (vnode, pivot) {
  // 创建dom节点
   let domNode = document.createElement(vnode.sel)
  //  如果vnode的第三个参数为文本, 低配版本，text不能和children属性做兼容
  if(vnode.text !== '' && (vnode.children === undefined || vnode.children.length === 0)) {
    // 将节点的text属性给到创建出来的真实dom元素
    domNode.innerText = vnode.text
    pivot.parentNode.insertBefore(domNode, pivot)
  }
  // 如果vnode的children是一个数组，并且长度大于0 说明这是有子节点的
  if(Array.isArray(vnode.children) && vnode.children.length > 0) {
    
  }
}