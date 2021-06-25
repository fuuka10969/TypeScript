// 函数：封装了一些重复使用的代码，在需要的时候直接调用即可

(() => {
  // 函数声明，命名函数
  function add(x: string, y: string): string { // 求和的函数
    return x + y
  }
  const result:string = add ('11', '22')
  console.log(result);

  // 函数表达式，匿名函数
  const add2 = function (x: number, y: number): number {
    return x + y
  }
  const result2:number = add2 (11, 22)
  console.log(result2);
  
  // 函数的完整写法
  // (x: number, y: number) => number  当前的这个函数的类型
  // function (x: number, y: number): number { return x + y }  相当于符合上面这个函数类型的值
  const add3: (x: number, y: number) => number = function (x: number, y: number): number {
    return x + y
  }
  console.log(add3(11, 22));
  
})()