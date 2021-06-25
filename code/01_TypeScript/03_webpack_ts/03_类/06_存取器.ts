// 存取器：让我们可以有效的控制对对象中的成员的访问，通过getters和setters来进行操作
(() => {
  // 外部可以传入姓氏和名字数据，同时使用set和get控制姓名的数据，外部也可以进行修改操作
  class Person {
    firstName: string
    lastName: string
    constructor(firstName: string, lastName: string) {
      this.firstName = firstName
      this.lastName = lastName
    }
    // 姓名的成员属性（外部可以访问，也可以修改）
    // 读取器
    get fullName() {
      return `${this.firstName}_${this.lastName}`
    }
    // 设置器
    set fullName(val) {
      let names =  val.split('_')
      this.firstName = names[0]
      this.lastName = names[1]
    }
  }
  const person: Person = new Person('森内', '贵宽')
  // 获取该属性成员属性
  console.log(person.fullName);
  // 设置该成员的数据
  person.fullName = '山下_亨'
  console.log(person.fullName);
  
})()