"use strict";
(function () {
    // class Dog {
    //   name: string
    //   age: number
    //   constructor(name: string, age: number) {
    //     this.name = name
    //     this.age = age
    //   }
    //   sayHello() {
    //     console.log('汪汪');
    //   }
    // }
    // class Cat {
    //   name: string
    //   age: number
    //   constructor(name: string, age: number) {
    //     this.name = name
    //     this.age = age
    //   }
    //   sayHello() {
    //     console.log('喵喵');
    //   }
    // }
    class Animal {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        sayHello() {
            console.log('动物在叫');
        }
    }
    class Dog extends Animal {
        run() {
            console.log(`${this.name}`);
        }
        sayHello() {
            console.log('汪汪');
        }
    }
    class Cat extends Animal {
        run() {
            console.log(`${this.name}`);
        }
        sayHello() {
            console.log('喵喵');
        }
    }
    const dog = new Dog('可乐', 4);
    console.log(dog);
    dog.run();
    dog.sayHello();
    const cat = new Cat('展堂', 5);
    console.log(cat);
    cat.run();
    cat.sayHello();
})();
