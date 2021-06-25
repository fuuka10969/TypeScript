// readonly修饰符：首先是一个关键字，对类中的属性成员进行修饰，修饰符后，该成员就不能在外部被随意修改
// 构造函数中可以对只读成员的数据进行修改
// 如果构造函数中没有任何参数，类中的属性成员此时已经使用readonly进行修饰，那么外部也不能对这个属性进行修改

// 构造函数中的参数可以使用 readonly 进行修饰，一旦修饰，那么该类中就有了这个只读的成员属性，外部可以访问，但是不能修改
// 构造函数中的参数可以使用 public、private 和 protected 进行修饰，且该类中都会自动添加这么一个属性成员

(() => {

  // readonly 修饰类中的成员属性操作
  class Person1 {
    // readonly name: string = 'taka' // 初始值
    readonly name: string
    constructor(name: string = 'taka' ) {
      this.name = name
      // this.name = 'iii'
    }
    sayHi() {
      console.log('test', this.name);
      // 类中的普通方法中，也不能修改readonly修饰的成员属性值
      // this.name = 'tomo'
    }
  }

  const person1 = new Person1('ryota')
  console.log(person1);
  console.log(person1.name);
  // name属性被readonly修饰， 为只读，不能修改
  // person.name = 'toru'
  // console.log(person.name);


  console.log('========================');
  
  // readonly 修饰构造函数中的参数（参数属性）
  class Person2 {
    // 构造函数中的参数一旦使用readonly进行修饰后，
    //     1. 该参数可以叫参数属性，
    //     2. 并且Person中就有了该参数的属性成员（public等其他修饰符同理）
    //     3. 外部也是无法修改类中的name属性成员值的
    constructor(readonly name: string = 'taka' ) {
      // this.name = name // Person中有了该参数的属性成员，所以不必再写
    }
  }

  const person2 = new Person2('fuuka')
  console.log(person2);
  console.log(person2.name);
})()