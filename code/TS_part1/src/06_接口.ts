(function () {
  //  描述一个对象的类型
  type myType = {
    name: string,
    age: number
    // [propname: string]: any
  }

  /**
   * 接口用来定义一个类结构，用来定义一个类中，应该包含哪些属性和方法
   *    同时，接口也可以当成类型声明去使用
   */
  interface myInterface {
    name: string,
    age: number
  }
  interface myInterface {
    gender: string,
  }

  const obj: myInterface = {
    name: '汤圆',
    age: 2,
    gender: '女'
  }

  /**
   * 接口可以在定义类的时候去限制类的结构
   *    接口中所有的属性都不能有实际的值
   *    接口只定义对像的结构，不考虑实际值
   *    在接口中所有的方法都是抽象方法
   */
  interface myInter {
    name: string;
    sayHello(): void
  }

  /**
   * 定义类时，可以使类去实现一个接口
   *    实现接口就是使类满足接口的要求
   */
  class MyClass implements myInter {
    name: string
    constructor(name: string) {
      this.name = name
    }
    sayHello() {
      console.log('hello world');
      
    }
  }
})()