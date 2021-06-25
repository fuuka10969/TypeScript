// 接口是对象的状态（属性）和行为（方法）的抽象（描述）
// 接口：是一种类型、规范、能力、约束
(() => {
    // 需求：创建人的对象，需要对人的属性进行一定的约束

    // id：number，必有，只读
    // name：string，必有
    // age：number，必有
    // sex：string，可有可无

    // 定义一个对象，该对象的类型就是我定义的接口IPerson
    interface IPerson{
      readonly id: number,
      name: string,
      age: number,
      sex?: string
    }
    const person:IPerson = {
      id: 82639,
      name: 'fuuka',
      age: 28,
    }
    console.log(person);
    person.sex = '女'
    console.log(person);
    

    
})()