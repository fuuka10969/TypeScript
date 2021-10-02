(function() {
  class Animal {
    name: string
    constructor(name: string) {
      this.name = name
    }
    sayHello() {
      console.log('动物在叫');
    }
  }

  class Dog extends Animal {
    age: number
    constructor(name:string, age: number) {
      // 如果在子类中写构造函数，在子类构造函数中必须对父类的构造函数进行调用
      super(name) // 调用父类的构造函数
      this.age = age
    }
    sayHello() {
      super.sayHello()
    }
  }

  const dog = new Dog('luka', 4)
  dog.sayHello()
})()