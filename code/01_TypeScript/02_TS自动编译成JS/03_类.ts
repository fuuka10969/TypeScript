// ts中书写js中的类，演示效果

(()=> {
  interface IPerson{
    firstName: string,
    lastName: string
  }
  // 定义一个类型
  class Person {
    firstName: string
    lastName: string
    fullName: string

    constructor(firstName:string, lastName:string) {
      this.firstName = firstName
      this.lastName = lastName
      this.fullName = this.firstName + '_' + this.lastName
    }
  }

  function showFullName(person: IPerson) {
    return person.firstName + '_' + person.lastName
  }

  // 实例化对象
  const person = new Person('yamashita', 'toru')

  console.log(showFullName(person));
  
})()