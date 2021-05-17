// ts中书写js中的类，演示效果
(function () {
    // 定义一个类型
    var Person = /** @class */ (function () {
        function Person(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.fullName = this.firstName + '_' + this.lastName;
        }
        return Person;
    }());
    function showFullName(person) {
        return person.firstName + '_' + person.lastName;
    }
    // 实例化对象
    var person = new Person('yamashita', 'toru');
    console.log(showFullName(person));
})();
