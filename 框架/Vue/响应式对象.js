// export function initState(vm) {
//   vm._watchers = []
//   const opts = vm.$options
//   if (opts.props) initProps(vm, opts.props)
//   if (opts.methods) initMethods(vm, opts.methods)
//   if (opts.data) {
//     initData(vm)
//   } else {
//     // 1
//     observe(vm._data = {}, true)
//   }
//   if (opts.computed) initComputed(vm, opts.computed)
//   if (opts.watch && opts.watch !== nativeWatch) {
//     initWatch(vm, opts.watch)
//   }
// }

let obj = {
  a: 123
}
let property = Object.getOwnPropertyDescriptor(obj, 'a')
console.log(property)

var o, d

o = { get foo() { return 17; } }
d = Object.getOwnPropertyDescriptor(o, 'foo')
console.log(d)