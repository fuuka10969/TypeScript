// 基础类型

(() => {
  // 布尔类型  boolean
  let flag: boolean = false
  console.log(flag);

  // 数字类型  number
  let a1: number = 10 // 十进制
  let a2: number = 0b1010  // 二进制
  let a3: number = 0o12 // 八进制
  let a4: number = 0xa // 十六进制

  console.log(a1);
  console.log(a2);
  console.log(a3);
  console.log(a4);

  // 字符串  string
  let name: string = 'fuuka'
  console.log(`My name is ${name}, I am ${a1} years old.`);

  // undefined null
  let und: undefined = undefined
  let nll: null = null

  console.log(und);
  console.log(nll);

  // undefined 和 null 都可以作为其他类型的子类型
  let num2: number = undefined
  console.log(num2);
  // ============================================

  // 数组类型
  // 数组定义方式1
  // 语法: let 变量名:数据类型[] = [值]
  let arr1: number[] = [1, 2, 3]
  console.log(arr1)

  // 语法2: let 变量名:Array<number> = [值]
  let arr2: Array<number> = [2, 3, 4]
  console.log(arr2);
  
  // 元组类型: 在定义数组的时候，类型和数据个数一开始就已经限定了
  let arr3: [string, number, boolean] = ['2', 3, true]
  console.log(arr3[0].split(''));
  console.log(arr3[1].toFixed(2));
  // ============================================

  // 枚举类型：枚举里面的每个数据值都可以叫元素，每个元素都有自己的编号，编号是从0开始的，依次递增加1
  enum Color{
    red = 2,
    green,
    yellow
  }
  // 定义一个Color的枚举类型的变量来接收枚举的值
  let color: Color = Color.red
  console.log(color);
  console.log(Color.red, Color.green, Color.yellow);
  console.log(Color[3]);
  // ============================================

  // any 类型: 缺点：没有报错提示
  let str:any = 100
  str = "67"
  let arr: any[] = [1, 'fuuka', false]
  console.log(arr);
  // ============================================

  // void 类型, 在函数声明时，小括号后面使用:void，代表该函数没有任何返回值
  function showMsg():void {
    console.log('返回返回');
  }
  console.log(showMsg());
  // ============================================

  // object 类型
  // 定义一个函数，参数是object类型，返回值也是object类型
  function getObj(obj:object):object {
    console.log(obj);
    return {
      name: 'taka',
      age: 32
    }
  }
  console.log(getObj({
    name: 'toru',
    age: 32
  }));
  // console.log(getObj(new String('123')));
  // console.log(getObj(String));
  // ============================================

  // 联合类型（Union Types)  表示取值可以为多种类型中的一种
  // 需求1: 定义一个函数得到一个数字或字符串值的字符串形式值
  // function getString(str:number|string):number {
  //   return str.toString()
    
  // }

  // 类型断言
  // 需求2: 定义一个函数得到一个数字或字符串值的字符串的长度
  console.log(getString(88));
  function getString(str:number|string):number {
    if((<string>str).length) {
      return (str as string).length
    } 
    return str.toString().length
    
  }
  console.log(getString('88'));

  // 类型推断
  
  
  
  
  
  
  
  
  

})()