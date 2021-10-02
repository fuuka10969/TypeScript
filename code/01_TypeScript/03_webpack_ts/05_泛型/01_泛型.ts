// 泛型：在定义函数、接口、类的时候不能预先确定要使用的数据类型，而是在使用时才能确定的数据类型

(() => {
  // 需求：定义一个函数，传入两个参数， 1 数据，2 数量
  //      函数的作用：根据数量产生对应个数的数据，存放在一个数组中，
  // 定义一个函数
  function getArr(value: number, count: number): number[] {
    // 根据数据和数量产生一个数组
    const arr: number[] = []
    for (let i = 0; i < count; i++) {
      arr.push(value)
    }
    return arr
  }

  const arr1 = getArr(100.123, 3)
  console.log(arr1);

  // 定义一个函数，同上，传入字符串类型
  function getArr2(value: string, count: number): string[] {
    // 根据数据和数量产生一个数组
    const arr: string[] = []
    for (let i = 0; i < count; i++) {
      arr.push(value)
    }
    return arr
  }
  const arr2 = getArr2('a', 7)
  console.log(arr2);

  // 定义一个函数，同上，传入任意类型
  function getArr3(value: any, count: number): any[] {
    // 根据数据和数量产生一个数组
    const arr: any[] = []
    for (let i = 0; i < count; i++) {
      arr.push(value)
    }
    return arr
  }
  const arr3 = getArr3(1, 7)
  console.log(arr3);

  // 定义一个函数，同上，传入任意类型
  function getArr4<T>(value: T, count: number): T[] {
    // 根据数据和数量产生一个数组
    const arr: Array<T> = []
    for (let i = 0; i < count; i++) {
      arr.push(value)
    }
    return arr
  }
  const arr4 = getArr4<number>(1, 7)
  const arr5 = getArr4<string>('q', 7)
  console.log(arr4);
  console.log(arr5);
  console.log(arr4[0].toFixed(0));
  console.log(arr5[0].split(''));


})()