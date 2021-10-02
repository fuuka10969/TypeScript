"use strict";
class Dog {
    constructor(name, age) {
        // 实例方法中，this表示当前的实例
        console.log(this);
        // 构造函数中，当前对象就是当前新建的那个对象
        // 可以通过this向新建的对象中添加属性
        this.name = name;
        this.age = age;
    }
    bark() {
        // 在方法中可以通过this来表示当前调用方法的对象
        console.log(`${this.name} 汪汪汪`);
    }
}
const dog = new Dog('光宗', 3);
const dog2 = new Dog('春梅', 2);
console.log(dog);
console.log(dog2);
dog.bark();
dog2.bark();
