// 上一次版本的createElement函数是需要接收两个参数的，第一个参数是要上树的虚拟节点，第二个参数是标杆
// 标杆的意思就是, 你要上树的虚拟节点要往哪里插入, 但是更新之后的createElement函数不需要标杆
export default function createElement(vnode) {
  // 创建dom节点
   let domNode = document.createElement(vnode.sel)
  //  如果vnode的第三个参数为文本, 低配版本，text不能和children属性做兼容
  if(vnode.text !== '' && (vnode.children === undefined || vnode.children.length === 0)) {
    // 将节点的text属性给到创建出来的真实dom元素
    domNode.innerText = vnode.text
  } else if(Array.isArray(vnode.children) && vnode.children.length > 0) {   // 如果vnode的children是一个数组，并且长度大于0 说明这是有子节点的
    // 递归去实现创建节点
    for(let i = 0; i < vnode.children.length; i++) {
      // 这里的ch是h函数中第三个参数的每个节点
      let ch = vnode.children[i]
      // 这里做递归，要拿到上一次的结果做下一次递归的参数
      let chVnode = createElement(ch)
      // 在这里插入递归返回的节点
      domNode.appendChild(chVnode)
    }
  }
  // 为vnode添加elm属性
  vnode.elm = domNode
  // 这里返回domNode和vnode.elm属性是一样的
  return vnode.elm
}