/**
 * @Description: 函数式button组件
 * @author: jly
 * @date: 2020/11/19
*/

export default {
  name: 'function-button',
  functional: true,
  render (createElement, { props, children }) {
    console.log(children)
    return createElement('button', {
      attrs: props
    }, children)
  }
}
