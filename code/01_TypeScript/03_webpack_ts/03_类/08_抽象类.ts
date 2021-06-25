// 抽象类：包含抽象方法（抽象方法一般没有任何的具体内容的实现），也可以包含实例方法，
// 抽象类是不能被实例化的，为了让子类进行实例化，及实现内部的抽象方法
// 抽象类的最终目的都是为子类服务的

(() => {
  // 定义一个类
  abstract class Animal {
    // 抽象属性（一般不用）
    // abstract name: string = 'taka'
    // 抽象方法
    abstract eat()
    // 报错的抽象方法，抽象方法不能有具体的实现
    // abstract eat() {
    //   console.log('真好吃');
      
    // }
    // 实例方法
    run() {
      console.log('run');
    }
  }

  // 定义一个子类（派生类）
  class Dog extends Animal {
    // name: string = 'toru'
    // 重新实现抽象类中的方法，此时这个方法就是当前Dog类的实例方法了
    eat() {
      console.log('eat');
      
    }
  }

  // 实例化Dog对象
  const dog:Dog = new Dog()
  // console.log(dog.name);
  
  dog.eat()
  dog.run()

  // 报错：抽象类型不能被实例化
  // const ani:Animal = new Animal()
})()