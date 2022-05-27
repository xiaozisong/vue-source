import {
  init,
  classModule, // 类名模块
  propsModule, // 属性模块
  styleModule, // 样式模块
  eventListenersModule, // 事件监听模块
  h,
} from "snabbdom";

// 创建patch函数
const patch = init([classModule, propsModule, styleModule, eventListenersModule])

// 获取容器
const container = document.getElementById('container')

// 了解h函数, h函数有三个参数，
// 第一个参数为标签名，第二个参数为标签的属性，如样式，id等，第三个参数为描述信息
// const VNode1 = h('a', {props: {href: 'https://www.baidu.com'}}, '百度一下')

/* 
  打印出来有6个属性
  children: undefined 是否有子节点
  data: {props: {…}} 属性
  elm: undefined 是否上树
  key: undefined 标识
  sel: "a" 选择器 selector
  text: "百度一下" 本文
*/
// console.log(VNode1) 
// patch(container, VNode1)

// h函数是可以嵌套使用的，嵌套的h函数会被添加到children属性中去，children是一个数组
const VNode2 = h('ul', [
  h('li', '苹果'),
  h('li', '鸭梨'),
  h('li', '香蕉'),
  h('li', [
    h('div', [
      h('span', {props: {id: 'span-custom', class: 'red'}},'榴莲'),
      h('span', '哈密瓜'),
    ])
  ]),
])

console.log(VNode2)

patch(container, VNode2)