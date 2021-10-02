"use strict";
// 使用class关键字定义一个类
/**
 * 对象中主要包含了两个部分：
 *  属性:
 *       1.直接定义的属性是实例属性，需要通过对象的实例去访问
 *        const per = new Person()
 *        per.name
 *
 *       2.使用static开头的属性是静态属性（类属性），可以直接通过类去访问
 *        static age: number = 18
 *        Person.age
 *
 *       3.readonly开头的属性表示一个只读的属性，无法修改
 *  方法
 */
class Person {
    constructor() {
        // 定义实例属性
        this.name = 'taka';
        // 定义只读属性
        this.gender = 'male';
    }
    // 定义方法
    /**
     * 如果方法以static开头，则属于类方法，可以直接通过类去调用
     */
    sayHello() {
        console.log('hello world');
    }
}
// 在属性前使用static关键字，定义类属性(静态属性)
Person.age = 18;
const per = new Person();
console.log(per);
console.log(per.name);
per.name = 'toru';
console.log(per.name);
// per.gender = 'female'
console.log(Person.age);
