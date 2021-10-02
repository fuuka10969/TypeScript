"use strict";
// function fn(a: number):number {
//   return a
// }
function fn(a) {
    return a;
}
// 可以直接调用具有泛型的函数
let reason1 = fn(10);
let reason2 = fn('hello');
// 泛型可以同时指定多个
function fn2(a, b) {
    console.log('a', a, 'b', b);
    return a;
}
fn2(1, 'hello');
// T extends Inter 表示泛型T必须是Inter实现类
function fn3(a) {
    return a.length;
}
fn3('123');
class MyClass {
    constructor(name) {
        this.name = name;
    }
}
const mc = new MyClass('dada');
