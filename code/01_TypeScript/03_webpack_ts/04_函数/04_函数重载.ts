// 函数重载：函数名字相同，函数的参数及个数不同

(() => {
  // 定义一个函数
  // 需求：又一个add函数，可以接受两个string类型参数进行拼接，也可接受两个number类型参数进行相加

  // 函数重载声明
  function add(x: string, y: string): string 
  function add(x: number, y: number): number 

  // 函数声明
  function add(x: string | number, y: string | number): string | number {
    if (typeof x === 'string' && typeof y === 'string') {
      return `${x}${y}`
    } else if (typeof x === 'number' && typeof y === 'number') {
      return x + y
    }
  }

  // 函数调用
  // 两个参数都是字符串
  console.log(add('b', 'a'));
  // 两个参数都是数字
  console.log(add(10, 100));
  // 此时如果传入的是非法数据，ts应该提示错误信息的内容，报红色错误信息
  // console.log(add(10, 'a'));
  // console.log(add('b', 10));
  
})()