// 继承：类与类之间的关系
// 继承后类与类之间的叫法：
// A类继承了B这个类，A类叫子类（派生），B类叫基类（超类，父类）
(() => {
  // 定义一个类，作为基类（超类）
  class Person {
    // 定义属性
    name: string
    age: number
    gender: string
    // 定义构造函数
    constructor(name: string = 'Taka', age: number = 33, gender: string = 'man') {
      // 更新属性数据
      this.name = name
      this.age = age
      this.gender = gender
    }
    // 定义实例方法
    sayHi(str: string) {
      console.log(`I'm ${this.name}, ${str}`)
    }
  }
  // 定义一个类继承自Person
  class Student extends Person {
    constructor(name: string, age: number, gender: string) {
      // 调用的是父类中的构造函数，使用super
      super(name, age, gender)
    }
    // 可以调用父类中的方法
    sayHi() {
      console.log("I'm sayHi in Student")
      super.sayHi('Fuuka')
    }
  }
  // 实例化Person
  const person = new Person('Fuuka', 28, 'woman')
  person.sayHi('haha')

  // 实例化Student
  const stu = new Student('Ryota', 32, 'man')
  stu.sayHi()

  // 总结：类和类之间如果要有继承关系，需要使用extends关键字
  // 子类中可以调用父类中的构造函数，使用的是super关键字（包括调用父类中的实例方法，也可以使用super）
  // 子类中可以使用父类的方法
})()