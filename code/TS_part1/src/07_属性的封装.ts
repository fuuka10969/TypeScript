(function () {
  // 定义一个类
  class Person {
    /**
     * ts可以在属性前添加属性修饰符
     * 修饰符（类中的成员的修饰符）：主要是描述类中的成员（属性、构造函数、实例方法）的可访问性
     * 类中的成员都有自己的默认的访问修饰符，public
     * public--公共的: 类中成员默认的修饰符，代表的是公共的，任何位置都可以访问类中的成员
     * private--私有的: 类中成员如果用 private 来修饰，那么外部无法访问这个成员数据，子类中也是无法访问该成员数据的
     * protected--受保护的: 类中成员如果用 private 来修饰，那么外部无法访问这个成员数据，子类中是可以访问该成员数据的
     */
    private _name: string
    private _age: number
    constructor(name: string, age: number) {
      this._name = name
      this._age = age
    }

    // 定义方法，用来获取name属性
    // getName() {
    //   return this.name
    // }

    // // 定义方法，用来设置name属性
    // setName(value: string) {
    //   this._name = value
    // }

    // // 定义方法，用来获取age属性
    // getAge() {
    //   return this._age
    // }

    // // 定义方法，用来设置age属性
    // setAge(value: number) {
    //   if(value >= 0) {
    //     this._age = value
    //   }
    // }

    // ts 中设置 getter 方法的方式
    get name() {
      return this._name
    }

    set name(value: string) {
      this._name = value
    }

    get age() {
      return this._age
    }

    set age(value: number) {
      if (value >= 0) {
        this._age = value
      }
    }
  }

  /**
   * 属性在对象中设置，可以被任意修改
   *    属性被任意修改将会导致对象中的数据变得非常不安全
   */

  const per = new Person('taka', 32)
  // per.setName('toru')
  console.log(per);
  // console.log(per.getName());

  per.name = 'toru'

  console.log(per.name);


  class A {
    protected num: number
    constructor(num: number) {
      this.num = num
    }
  }

  class B extends A {
    test() {
      console.log(this.num);
      
    }
  }

  class C {
    // 可以直接将属性定义在构造函数中
    constructor(public name: string, protected age: number) {

    }
  }

  const b = new B(1)


})()