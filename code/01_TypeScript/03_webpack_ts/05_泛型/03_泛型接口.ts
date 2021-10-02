// 泛型接口：在定义接口时，为接口中的属性或方法定义泛型类型，在使用接口时，再指定具体的泛型类型

(() => {
  // 定义一个类，用于存储用户的相关信息（id、name、age）
  // 通过一个类的实例对象调用add方法，可以添加多个用户信息对象，
  // 调用getUserId方法，可以根据id获取某个指定的用户信息对象

  // 定义一个泛型接口
  interface IBaseCRUD<T> {
    data: Array<T>
    add: (t: T) => T
    getUserId: (id: number) => T
  }

  // 定义一个用户信息的类
  class User {
    id?: number
    name: string
    age: number
    constructor(name: string, age: number) {
      this.name = name
      this.age = age
    }
  }

  // 定义一个类，可以针对用户信息进行增加及查询操作
  class UserCRUD implements IBaseCRUD<User> {
    // 用来保存多个User类型的用户信息对象
    data: Array<User> = []

    // 用户存储用户信息对象
    add(user: User): User {
      user.id = Date.now() + Math.random()
      this.data.push(user)
      return user
    }

    // 根据id获取某个用户信息对象
    getUserId(id: number): User {
      return this.data.find(user => user.id === id)
    }
  }

  // 实例化添加用户信息对象的类UserCRUD
  const userCRUD: UserCRUD = new UserCRUD()
  userCRUD.add(new User('Fuuka', 28))
  userCRUD.add(new User('Taka', 32))
  const { id } = userCRUD.add(new User('Toru', 32))
  console.log(userCRUD.data)
  const user = userCRUD.getUserId(id)
  console.log(user);

})()