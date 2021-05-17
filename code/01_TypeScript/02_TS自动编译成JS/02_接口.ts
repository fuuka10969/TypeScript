// 接口是一种能力、约束

(()=> {
  interface IPerson{
    firstName: string,
    lastName: string
  }
  function showFullName(person: IPerson) {
    return person.firstName + '_' + person.lastName
  }
  const person = {
    firstName: '森内',
    lastName: '贵宽'
  }
  console.log(showFullName(person));
  
})()