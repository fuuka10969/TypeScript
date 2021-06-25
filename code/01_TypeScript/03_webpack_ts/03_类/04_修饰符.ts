// 修饰符（类中的成员的修饰符）：主要是描述类中的成员（属性、构造函数、实例方法）的可访问性
// 类中的成员都有自己的默认的访问修饰符，public
// public--公共的: 类中成员默认的修饰符，代表的是公共的，任何位置都可以访问类中的成员
// private--私有的: 类中成员如果用 private 来修饰，那么外部无法访问这个成员数据，子类中也是无法访问该成员数据的
// protected--受保护的: 类中成员如果用 private 来修饰，那么外部无法访问这个成员数据，子类中是可以访问该成员数据的

(() => {
  // 定义一个类
  class Person {
    // public name: string 任何位置 都可以访问
    // private name: string 外部、子类 无法访问
    protected name: string // 外部 无法访问, 子类 可以访问

    public constructor(name: string) {
      this.name = name
    }
    public eat() {
      console.log('This is delicious');
    }
  }

  // 定义一个子类
  class Student extends Person {
    constructor(name: string) {
      super(name)
    }
    play() {
      console.log(`${this.name}`);
      
    }
  }


  // 实例化对象
  const per = new Person('taka')
  // 在类的外部可以访问类中的属性成员
  // console.log(per.name);
  per.eat()

  const stu = new Student('toru')
  stu.play()
  // console.log(stu.name);

})()