// 可选参数：函数在声明的时候，内部的参数使用了?进行修饰的参数，该参数可传可不传
// 默认参数：函数在声明的时候，内部的参数有自己的默认值的参数

(() => {
  // 定义一个函数：传入名字和姓氏得到姓名
  // 需求：如果不传入任何内容，返回默认姓氏
  //      如果只传入姓氏，返回姓氏
  //      传入姓氏和名字，返回姓名

  const getFullName = function(firstName: string = '东方', lastName?: string):string {
    if(lastName) {
      return `${firstName}_${lastName}`
    }
    return firstName
  }


  // 函数调用
  console.log(getFullName());
  console.log(getFullName('令狐'));
  console.log(getFullName('令狐', '冲'));
  

})()