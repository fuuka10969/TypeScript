// 类 类型：类的类型，类的类型可以通过接口来实现

(() => {
  // 定义一个接口
  interface IFly {
    fly()
  }

  // 定义一个类，这个类的类型就是上面定义的接口
  class Person implements IFly {
    fly() {
      console.log('test');

    }

  }
  // 实例化对象
  const person = new Person()
  person.fly()

  // 定义一个接口
  interface ISwim {
    swim()
  }

  // 定义一个类，这个类的类型就是IFly和ISwim（当前这个类可以实现多个接口，一个类也可以被多个接口进行约束）
  class Person2 implements IFly, ISwim {
    fly() {
      console.log('fly');
    }
    swim() {
      console.log('swim');
    }
  }
  const person2 = new Person2()
  person2.fly()
  person2.swim()
  // 总结：类可以通过接口的方式，来定义当前类的类型
  // 类可以实现一个接口，也可以实现多个接口，注意：接口中的内容都要真正的实现

  // 接口可以继承其他的多个接口
  interface IMyFlyAndSwim extends IFly, ISwim{}

  // 定义一个类，直接实现IMyFlyAndSwim接口
  class Person3 implements IMyFlyAndSwim {
    fly() {
      console.log('fly3');
    }
    swim() {
      console.log('swim3');
    }
  }
  const person3 = new Person3()
  person3.fly()
  person3.swim()

  // 总结：接口和接口之间叫继承（extends），类和接口之间叫实现（implements）
  
})()