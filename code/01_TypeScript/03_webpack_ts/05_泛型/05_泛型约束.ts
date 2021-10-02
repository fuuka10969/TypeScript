// 如果直接对一个泛型参数取 length 属性，会报错，以为这个泛型根本就不知道它有这个属性

(() => {
  // 定义一个接口用来约束将来的某个类型中必须要有length这个属性
  interface ILength {
    length: number
  }
  function getLength<T extends ILength> (x: T):number {
    return x.length
  }

  console.log(getLength<string>('hello'));
  
})()