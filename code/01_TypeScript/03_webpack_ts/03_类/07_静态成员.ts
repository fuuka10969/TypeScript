// 静态成员：在类中通过static修饰的属性或者方法，那么就是静态的属性及静态的方法，也称之为静态成员
// 静态成员在使用的时候，是通过类名.的这种语法来调用的

(() => {
  // 定义一个类
  class Person {
    // 静态属性
    static name1: string = 'taka'
    // 构造函数是不能通过static来修饰的
    constructor() {
      // 此时this是实例对象，name1是静态属性，不能通过实例对象直接调用静态属性来使用
      // this.name1 = name
    }
    static sayHi() {
      console.log('hello');

    }
  }
  const person: Person = new Person()
  // 通过实例对象调用的属性（实例属性）
  // console.log(person.name);
  // 通过实例对象调用的方法（实例方法）
  // person.sayHi()
  // 通过类名.静态属性的方法来访问该成员的数据
  console.log(Person.name1);
  // 通过类名.静态属性的方法来设置该成员的数据
  Person.name1 = 'toru'
  console.log(Person.name1);
  // 通过类名.静态方法的方式来调用的方法
  Person.sayHi()

})()