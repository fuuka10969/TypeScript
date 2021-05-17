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
  let name:string = 'fuuka'
  console.log(`My name is ${name}, I am ${a1} years old.`);

  // undefined null
  let und:undefined = undefined
  let nll:null = null

  console.log(und);
  console.log(nll);

  // undefined 和 null 都可以作为其他类型的子类型
  let num2:number = undefined
  console.log(num2);
  
  
  
})()