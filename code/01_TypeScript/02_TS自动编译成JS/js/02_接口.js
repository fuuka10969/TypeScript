// 接口是一种能力、约束
(function () {
    function showFullName(person) {
        return person.firstName + '_' + person.lastName;
    }
    var person = {
        firstName: '森内',
        lastName: '贵宽'
    };
    console.log(showFullName(person));
})();
