// 上一次版本的createElement函数是需要接收两个参数的，第一个参数是要上树的虚拟节点，第二个参数是标杆
// 标杆的意思就是, 你要上树的虚拟节点要往哪里插入, 但是更新之后的createElement函数不需要标杆
export default function createElement(vnode) {
  console.log(vnode)
  // 创建dom节点
   let domNode = document.createElement(vnode.sel)
  //  如果vnode的第三个参数为文本, 低配版本，text不能和children属性做兼容
  if(vnode.text !== '' && (vnode.children === undefined || vnode.children.length === 0)) {
    // 将节点的text属性给到创建出来的真实dom元素
    domNode.innerText = vnode.text
  }
  // 如果vnode的children是一个数组，并且长度大于0 说明这是有子节点的
  if(Array.isArray(vnode.children) && vnode.children.length > 0) {
    // 递归去实现创建节点
    for(let i = 0; i < vnode.children.length; i++) {
      let ch = vnode.children[i]
      let newVnode = createElement(ch)
      console.log(newVnode, '17')
      domNode.appendChild(newVnode)
    }
  }
  return domNode
}