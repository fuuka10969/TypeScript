// 定义一个类，其中属性值的类型是不确定的，方法中的参数及返回值的类型也是不确定
// 定义一个泛型类

(() => {
  class GenericNumber<T>{
    defaultValue: T
    add: (x: T, y: T) => T
  }

  // 在实例化类的对象时，确定泛型的类型
  const g1: GenericNumber<number> = new GenericNumber<number>()
  // 设置属性值
  g1.defaultValue = 100
  g1.add = function (x, y) {
    return x + y
  }
  console.log(g1.add(2,3));

  // 在实例化类的对象时，确定泛型的类型
  const g2: GenericNumber<string> = new GenericNumber<string>()
  // 设置属性值
  g2.defaultValue = 'halo'
  g2.add = function (x, y) {
    return x + y
  }
  console.log(g2.add('a', g2.defaultValue));
  
})()
