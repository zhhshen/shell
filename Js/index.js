### ~ 按位取反

原理：所有正整数的按位取反是其本身+1 的负数，所有负整数的按位取反是其本身+1 的绝对值，零的按位取反是 -1

const str = 'ssff<>dsdsdd<'
console.log(str.indexOf('<'))
console.log(~str.indexOf('<'))

### ! 取反