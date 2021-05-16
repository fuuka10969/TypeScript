// 类型注解：是一种轻量级的为函数或变量添加的约束

(() => {
  function showMsg(str:string) {
    return 'this is' + str
  }
  let msg = 'lemon'
  console.log(showMsg(msg));
  
})()