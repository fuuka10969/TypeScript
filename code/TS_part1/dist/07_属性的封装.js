"use strict";
(function () {
    // 定义一个类
    class Person {
        constructor(name, age) {
            this._name = name;
            this._age = age;
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
            return this._name;
        }
        set name(value) {
            this._name = value;
        }
        get age() {
            return this._age;
        }
        set age(value) {
            if (value >= 0) {
                this._age = value;
            }
        }
    }
    /**
     * 属性在对象中设置，可以被任意修改
     *    属性被任意修改将会导致对象中的数据变得非常不安全
     */
    const per = new Person('taka', 32);
    // per.setName('toru')
    console.log(per);
    // console.log(per.getName());
    per.name = 'toru';
    console.log(per.name);
    class A {
        constructor(num) {
            this.num = num;
        }
    }
    class B extends A {
        test() {
            console.log(this.num);
        }
    }
    class C {
        // 可以直接将属性定义在构造函数中
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
    const b = new B(1);
})();
