// function fn(a: number):number {
//   return a
// }

function fn<T>(a: T):T {
  return a
}

// 可以直接调用具有泛型的函数
let reason1 = fn(10)
let reason2 = fn<string>('hello')

// 泛型可以同时指定多个
function fn2<T, K>(a: T, b: K): T {
  console.log('a', a, 'b', b);
  return a
}

fn2<number, string>(1, 'hello')

interface Inter {
  length: number
}

// T extends Inter 表示泛型T必须是Inter实现类
function fn3<T extends Inter>(a: T):number {
  return a.length
} 

fn3('123')

class MyClass<T> {
  name: T
  constructor(name: T) {
    this.name = name
  }
}

const mc = new MyClass<string>('dada')