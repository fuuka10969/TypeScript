// 类型注解：是一种轻量级的为函数或变量添加的约束
(function () {
    function showMsg(str) {
        return 'this is' + str;
    }
    var msg = ['lemon'];
    console.log(showMsg(msg));
})();
